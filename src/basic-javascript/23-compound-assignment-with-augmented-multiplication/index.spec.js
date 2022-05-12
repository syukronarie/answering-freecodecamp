const __helpers = require('../../helpers');

/**
 * Compound Assignment With Augmented Multiplication
 * Todo: Convert the assignments for `a`, `b`, and `c` to use the `*=` operator.
 * * `a` should equal `25`.
 * * `b` should equal `36`.
 * * `c` should equal `46`.
 * * You should use the `*=` operator for each variable.
 * * You should not modify the code above the specified comment.
 */

function writeYourCode() {
  // write your code below

  let a = 5;
  let b = 12;
  let c = 4.6;

  // Only change code below this line
  a *= 5;
  b *= 3;
  c *= 10;

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

describe('23 - Compound Assignment With Augmented Multiplication', () => {
  it('`a` should equal `25`.', () => {
    assert(a === 25);
  });
  it('`b` should equal `36`.', () => {
    assert(b === 36);
  });
  it('`c` should equal `46`.', () => {
    assert(c === 46);
  });
  it('You should use the `*=` operator for each variable.', () => {
    assert(code.match(/\*=/g).length === 3);
  });
  it('You should not modify the code above the specified comment.', () => {
    assert(
      /let a = 5;/.test(code) &&
        /let b = 12;/.test(code) &&
        /let c = 4\.6;/.test(code)
    );
  });
});
