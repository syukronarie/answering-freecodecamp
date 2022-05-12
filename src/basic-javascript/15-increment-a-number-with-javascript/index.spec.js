const __helpers = require('../../helpers');

/**
 * Increment a Number with JavaScript
 * Todo: Change the code to use the `++` operator on `myVar`.
 * * `myVar` should equal `88`.
 * * You should not use the assignment operator.
 * * You should use the `++` operator.
 * * You should not change code above the specified comment.
 */

function writeYourCode() {
  // write your code below

  let myVar = 87;

  // Only change code below this line
  myVar++;

  return {
    myVar,
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
const { myVar } = writeYourCode();

describe('15 - Increment a Number with JavaScript', () => {
  it('`myVar` should equal `88`.', () => {
    assert(myVar === 88);
  });
  it('You should not use the assignment operator.', async () => {
    assert(
      /let\s*myVar\s*=\s*87;\s*\/*.*\s*([+]{2}\s*myVar|myVar\s*[+]{2});/.test(
        code
      )
    );
  });
  it('You should use the `++` operator.', () => {
    assert(/[+]{2}\s*myVar|myVar\s*[+]{2}/.test(code));
  });
  it('You should not change code above the specified comment.', () => {
    assert(/let myVar = 87;/.test(code));
  });
});
