module.exports = {
  nycCoverage: false,
  coverage: false,
  auto_compose: true,
  node: '14',
  parallel: 3,
  test_framework: 'jest --config ../../jest.config.js --runTestsByPath',
  tests: '__tests__/**/*.spec.ts',
  extras: {
    tester: {
      working_dir: '/src/packages/plugin-router-hapi',
      volumes: [
        '${PWD}/../../:/src:cached'
      ]
    }
  }
}