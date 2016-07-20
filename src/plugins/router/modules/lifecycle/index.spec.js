const { expect } = require('chai');
const moduleLifecycle = require('./');
const Errors = require('common-errors');
const Extensions = require('./../../extensions');
const Promise = require('bluebird');

describe('router: module lifecycle', function suite() {
  it('should throw argument error', function test(done) {
    const module = 'foo';
    const promiseFactory = () => {};
    const extensions = new Extensions({ enabled: [], register: {} });
    const args = [];

    expect(() => moduleLifecycle({}, promiseFactory, extensions, args))
      .to.throw(Errors.ArgumentError, 'module');
    expect(() => moduleLifecycle(module, {}, extensions, args))
      .to.throw(Errors.ArgumentError, 'promiseFactory');
    expect(() => moduleLifecycle(module, promiseFactory, {}, args))
      .to.throw(Errors.ArgumentError, 'extensions');
    expect(() => moduleLifecycle(module, promiseFactory, extensions, {}))
      .to.throw(Errors.ArgumentError, 'args');
    done();
  });

  it('should return error from pre-handler', function test(done) {
    const extensions = new Extensions({
      enabled: ['preFoo'],
      register: {
        preFoo: [
          args => Promise.resolve(`success: ${args}`),
          args => Promise.reject(`error: ${args}`),
        ],
      },
    });

    moduleLifecycle(
      'foo',
      args => Promise.resolve(`result: ${args}`),
      extensions,
      ['bar']
    ).catch(error => {
      expect(error).to.be.equals('error: bar');
      done();
    });
  });

  it('should return result from handler with pre-handler', function test() {
    const extensions = new Extensions({
      enabled: ['preFoo'],
      register: {
        preFoo: [
          args => Promise.resolve(`success: ${args}`),
        ],
      },
    });

    moduleLifecycle(
      'foo',
      args => Promise.resolve(`result: ${args}`),
      extensions,
      ['bar']
    ).then(result => {
      expect(result).to.be.equals('result: bar');
      return Promise.resolve();
    });
  });

  it('should return result from handler', function test() {
    const extensions = new Extensions({ enabled: [], register: {} });

    moduleLifecycle(
      'foo',
      args => Promise.resolve(`result: ${args}`),
      extensions,
      ['bar']
    ).then(result => {
      expect(result).to.be.equals('result: bar');
      return Promise.resolve();
    });
  });

  it('should return error from handler', function test(done) {
    const extensions = new Extensions({ enabled: [], register: {} });

    moduleLifecycle(
      'foo',
      args => Promise.reject(`result error: ${args}`),
      extensions,
      ['bar']
    ).catch(error => {
      expect(error).to.be.equals('result error: bar');
      done();
    });
  });

  it('should return error from post-handler', function test(done) {
    const extensions = new Extensions({
      enabled: ['postFoo'],
      register: {
        postFoo: [
          args => Promise.resolve(`success: ${args}`),
          () => Promise.reject('error: bar'),
        ],
      },
    });

    moduleLifecycle(
      'foo',
      args => Promise.resolve(`result: ${args}`),
      extensions,
      ['bar']
    ).catch(error => {
      expect(error).to.be.equals('error: bar');
      done();
    });
  });

  it('should be able to modify result if no error returned from handler', function test() {
    const extensions = new Extensions({
      enabled: ['postFoo'],
      register: {
        postFoo: [
          responce => {
            responce.result = `${responce.result} baz`;
            return Promise.resolve();
          },
        ],
      },
    });

    moduleLifecycle(
      'foo',
      args => Promise.resolve(`foo ${args}`),
      extensions,
      ['bar']
    ).then(result => {
      expect(result).to.be.equals('foo bar baz');
      return Promise.resolve();
    });
  });

  it('should be able to modify error returned from handler', function test(done) {
    const extensions = new Extensions({
      enabled: ['postFoo'],
      register: {
        postFoo: [
          responce => {
            responce.error = `${responce.error} baz`;
            return Promise.resolve();
          },
        ],
      },
    });

    moduleLifecycle(
      'foo',
      args => Promise.reject(`foo ${args}`),
      extensions,
      ['bar']
    ).catch(error => {
      expect(error).to.be.equals('foo bar baz');
      done();
    });
  });
});