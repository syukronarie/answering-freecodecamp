/**
 * Decrement a Number with JavaScript
 * Todo: Change the code to use the `--` operator on `myVar`.
 * * `myVar` should equal `10`.
 * * `myVar = myVar - 1;` should be changed.
 * * You should not assign `myVar` with `10`.
 * * You should use the `--` operator on `myVar`.
 * * You should not change code above the specified comment.
 */

function writeYourCode() {
  // write your code below

  let myVar = 11;

  // Only change code below this line
  myVar--;

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

describe('16 - Decrement a Number with JavaScript', () => {
  it('`myVar` should equal `10`.', () => {
    assert(myVar === 10);
  });
  it('`myVar = myVar - 1;` should be changed.', async () => {
    assert(!code.match(/myVar\s*=\s*myVar\s*[-]\s*1.*?;?/));
  });
  it('You should not assign `myVar` with `10`.', () => {
    assert(!code.match(/myVar\s*=\s*10.*?;?/));
  });
  it('You should use the `--` operator on `myVar`.', () => {
    assert(/[-]{2}\s*myVar|myVar\s*[-]{2}/.test(code));
  });
  it('You should not change code above the specified comment.', () => {
    assert(/let myVar = 11;/.test(code));
  });
});
