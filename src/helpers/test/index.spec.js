const { assert } = require('chai');
const { removeWhiteSpace } = require('..');
const sinon = require('sinon');

let code;
let mockedErrorResult;
let mockedSuccessResult;

const mockedCodeFunc = sinon.fake();

describe('Helpers', () => {
  describe('Removing Space from Entire String;', () => {
    beforeEach(() => {
      code = mockedCodeFunc.toString();
      mockedErrorResult = removeWhiteSpace();
      mockedSuccessResult = removeWhiteSpace(code);
    });

    it('should returns `undefined` when arguments is falsy', () => {
      assert(mockedErrorResult === undefined);
      assert.equal(mockedErrorResult, undefined);
    });
    it('should returns a `string` without space when argument is truty', () => {
      assert(typeof code === 'string');
      assert.notEqual(mockedSuccessResult, undefined);
      assert(/fake?/.test(mockedSuccessResult));
    });
  });
});
