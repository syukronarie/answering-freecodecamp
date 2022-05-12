/**
 * Compound Assignment With Augmented Subtraction
 * Todo: Convert the assignments for `a`, `b`, and `c` to use the `-=` operator.
 * * `a` should equal `5`.
 * * `b` should equal `-6`.
 * * `c` should equal `2`.
 * * You should use the `-=` operator for each variable.
 * * You should not modify the code above the specified comment.
 */

function writeYourCode() {
  // write your code below

  let a = 11;
  let b = 9;
  let c = 3;

  // Only change code below this line
  a -= 6;
  b -= 15;
  c -= 1;

  return {
    a,
    b,
    c,
  };
}

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

const code = writeYourCode.toString();
const { a, b, c } = writeYourCode();

describe('22 - Compound Assignment With Augmented Subtraction', () => {
  it('`a` should equal `5`.', () => {
    assert(a === 5);
  });
  it('`b` should equal `-6`.', () => {
    assert(b === -6);
  });
  it('`c` should equal `2`.', () => {
    assert(c === 2);
  });
  it('You should use the `-=` operator for each variable.', () => {
    assert(code.match(/-=/g).length === 3);
  });
  it('You should not modify the code above the specified comment.', () => {
    assert(
      /let a = 11;/.test(code) &&
        /let b = 9;/.test(code) &&
        /let c = 3;/.test(code)
    );
  });
});
