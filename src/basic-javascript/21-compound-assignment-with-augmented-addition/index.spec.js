/**
 * Compound Assignment With Augmented Addition
 * Todo: Convert the assignments for `a`, `b`, and `c` to use the `+=` operator.
 * * `a` should equal `15`.
 * * `b` should equal `26`.
 * * `c` should equal `19`.
 * * You should use the `+=` operator for each variable.
 * * You should not modify the code above the specified comment.
 */

function writeYourCode() {
  // write your code below

  let a = 3;
  let b = 17;
  let c = 12;

  // Only change code below this line
  a += 12;
  b += 9;
  c += 7;

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

describe('21 - Compound Assignment With Augmented Addition', () => {
  it('`a` should equal `15`.', () => {
    assert(a === 15);
  });
  it('`b` should equal `26`.', () => {
    assert(b === 26);
  });
  it('`c` should equal `19`.', () => {
    assert(c === 19);
  });
  it('You should use the `+=` operator for each variable.', () => {
    assert(code.match(/\+=/g).length === 3);
  });
  it('You should not modify the code above the specified comment.', () => {
    assert(/let a = 3;\s*let b = 17;\s*let c = 12;/.test(code));
  });
});
