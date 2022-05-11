/**
 * Explore Differences Between the var and let Keywords
 * Todo: Update the code so it only uses the `let` keyword.
 * * `var` should not exist in the code.
 * * `catName` should be the string `Oliver`.
 * * `catSound` should be the string `Meow!`
 */

function writeYourCode() {
  // write your code below
  let catName;
  let catSound;

  catName = 'Oliver';
  catSound = 'Meow!';

  // ! don't remove this for testing cases
  return {
    catName,
    catSound,
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
const { catName, catSound } = writeYourCode();

describe('09 - Explore Differences Between the var and let Keywords', () => {
  it('`var` should not exist in the code.', () => {
    assert.notMatch(code, /var/g);
  });
  it('`catName` should be the string `Oliver`.', () => {
    assert.equal(catName, 'Oliver');
  });
  it('`catSound` should be the string `Meow!`', () => {
    assert.equal(catSound, 'Meow!');
  });
});
