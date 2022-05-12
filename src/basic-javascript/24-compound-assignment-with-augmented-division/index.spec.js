/**
 * Compound Assignment With Augmented Division
 * Todo: Convert the assignments for `a`, `b`, and `c` to use the `/=` operator.
 * * `a` should equal `4`.
 * * `b` should equal `27`.
 * * `c` should equal `3`.
 * * You should use the `/=` operator for each variable.
 * * You should not modify the code above the specified comment.
 */

function writeYourCode() {
  // write your code below

  let a = 48;
  let b = 108;
  let c = 33;

  // Only change code below this line
  a /= 12;
  b /= 4;
  c /= 11;

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

describe('24 - Compound Assignment With Augmented Division', () => {
  it('`a` should equal `4`.', () => {
    assert(a === 4);
  });
  it('`b` should equal `27`.', () => {
    assert(b === 27);
  });
  it('`c` should equal `3`.', () => {
    assert(c === 3);
  });
  it('You should use the `/=` operator for each variable.', () => {
    assert(code.match(/\/=/g).length === 3);
  });
  it('You should not modify the code above the specified comment.', () => {
    assert(/let a = 48;\s*let b = 108;\s*let c = 33;/.test(code));
  });
});
