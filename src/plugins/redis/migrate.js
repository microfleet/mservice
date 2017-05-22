// Provides sets of utils for perfoming migrations on redis database
// It's essential to note that this is targeted at a single instance
// In case of cluster one must ensure that you use keyPrefix, which would
// resolve to the same cluster

// 1. accepts array of migration scripts, it must export the following object:
//   -- `final` - denotes version after migration has been completed
//   -- `script` - if `String` would be treated as LUA, otherwise as FN to be executed. One must
//   understand that such function can only bring new data into the system, because
//   this function won't be atomically called, `fn` will be passed current redis pipeline instance
//   to enqueue more actions
//   -- `min` - optional, minimum current version
// 2. prepends lua check which converts script to noop if migration has already been performed
// 3. verified that min/final constraints overlap, except for the very first script
// 4. sends scripts via redis.pipeline()
//
// This essentially blocks master from any writes, because redis is single threaded.
// Assuming we don't really have much work to do this script could do it's job very fast.
// However, in scenarios where migrations are complicated:
//
// * non trivial amounts of data are involved
// * distributed databases
// * ?
//
// One must consider ways to enforce maintenance mode and ensure that no writes would
// be performed on the main database during migration process
//

const Promise = require('bluebird');
const assert = require('assert');
const glob = require('glob');
const is = require('is');
const sortBy = require('sort-by');
const path = require('path');
const fs = require('fs');
const debug = require('debug')('mservice:redis:migrate');

// some constant helpers
const VERSION_KEY = 'version';

/**
 * This script is used to verify that we havent performed the transaction yet
 * @param  {Number} finalVersion
 * @param  {Number} [min=0]
 * @return {String}
 */
const appendPreScript = (finalVersion, min = 0) => `-- check for ${finalVersion}
local currentVersion = tonumber(redis.call('get', KEYS[1]) or 0);
if currentVersion >= ${finalVersion} then
  return nil;
end

if currentVersion < ${min} then
  return redis.reply_error('min version constraint failed');
end
-- end check`;

/**
 * This script is used to put version after migration is complete
 * @param  {Number} finalVersion
 * @return {String}
 */
const appendPostScript = finalVersion => `-- set current version
return redis.call('set', KEYS[1], '${finalVersion}');
`;

function checkVersionError(error) {
  this.log.error(error);

  if (error.message === 'min version constraint failed') {
    return;
  }

  throw error;
}

/**
 * This is the most common case of a single LUA script for migration
 * @param  {Number} finalVersion
 * @param  {Number} [min=0]
 * @param  {String} script
 * @return {String}
 */
const appendLuaScript = (finalVersion, min = 0, script) => [
  appendPreScript(finalVersion, min),
  script,
  appendPostScript(finalVersion),
].join('\n');

module.exports = async function performMigration(redis, service, scripts) {
  let files;
  if (is.string(scripts)) {
    debug('looking for files in %s', scripts);
    // eslint-disable-next-line import/no-dynamic-require
    files = glob.sync('*{.js,/}', { cwd: scripts }).map(script => require(`${scripts}/${script}`));
  } else if (is.array(scripts)) {
    files = scripts;
  } else {
    throw new Error('`scripts` arg must be either a directory with migrations or Migrations[]');
  }

  if (files.length === 0) {
    debug('no files found');
    return Promise.resolve();
  }

  // sort in order of execution
  files.sort(sortBy('final', 'min'));

  // fetch current version and then remove unneeded migrations
  const savedVersion = await redis.get(VERSION_KEY);
  const currentVersion = parseInt(savedVersion || 0, 10);

  // ensure that all files have final > currentVersion
  files = files.filter(file => file.final > currentVersion);

  if (files.length === 0) {
    debug('no files found');
    return Promise.resolve();
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const file of files) {
    const final = file.final;
    assert(is.integer(+final), 'final version must be present and be an integer');

    if (is.string(file.script)) {
      // read file contents
      if (path.isAbsolute(file.script)) {
        file.script = fs.readFileSync(file.script, 'utf8');
      }

      // finalize content
      const script = appendLuaScript(final, file.min, file.script);
      const keys = [VERSION_KEY].concat(file.keys || []);
      const args = file.args;

      debug('evaluating script after %s', currentVersion, script);

      try {
        // eslint-disable-next-line no-await-in-loop
        await redis.eval(script, keys.length, keys, args);
      } catch (error) {
        checkVersionError.call(service, error);
      }
    } else if (is.fn(file.script)) {
      try {
        // eslint-disable-next-line no-await-in-loop
        await redis.eval(appendPreScript(final, file.min), 1, [VERSION_KEY]);
      } catch (error) {
        checkVersionError.call(service, error);
      }

      // must return promise
      // eslint-disable-next-line no-await-in-loop
      await file.script(service, VERSION_KEY, appendLuaScript);
      // eslint-disable-next-line no-await-in-loop
      await redis.eval(appendPostScript(final), 1, [VERSION_KEY]);
    } else {
      throw new Error('script must be a function if not a string');
    }
  }

  return null;
};
