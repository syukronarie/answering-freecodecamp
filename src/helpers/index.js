/**
 * @function removeWhiteSpace()
 * @description Removing Space from Entire String
 * * should returns `undefined` when arguments is falsy
 * * should returns a `string` without space when argument is truty
 * @returns `String || undefined`
 * @param {String} code
 */

const removeWhiteSpace = (code) => {
  if (!code) return;
  return code.split(' ').join('');
};

module.exports = { removeWhiteSpace };
