/**
 * Understanding Uninitialized Variables
 * Todo: Initialize the three variables `a`, `b`, and `c` with `5`, `10`, and `"I am a"` respectively so that they will not be `undefined`.
 * * Hint:
 * * `a` should be defined and evaluated to have the value of `6`.
 * * `b` should be defined and evaluated to have the value of `15`.
 * * `c` should not contain `undefined` and should have a value of the string `I am a String!`
 */

// Write your code below
const a = 6;
const b = 15;
const c = 'I am a String!';

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

const { assert } = require('chai');

describe('first', () => {
  it('`a` should be defined and evaluated to have the value of `6`', () => {
    assert(typeof a === 'number' && a === 6);
  });
  it('`b` should be defined and evaluated to have the value of `15`.', () => {
    assert(typeof b === 'number' && b === 15);
  });
  it('`c` should not contain `undefined` and should have a value of the string `I am a String!`', () => {
    assert(!/undefined/.test(c) && c === 'I am a String!');
  });
});
