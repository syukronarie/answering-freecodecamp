const __helpers = require('../../helpers');

/**
 * Create Decimal Numbers with JavaScript
 * Todo: Create a variable `myDecimal` and give it a decimal value with a fractional part (e.g. `5.7`).
 * * `myDecimal` should be a number.
 * * `myDecimal` should have a decimal point
 */

function writeYourCode() {
  const ourDecimal = 5.7;

  // write your code below

  // Only change code below this line
  const myDecimal = 0.009;

  return {
    ourDecimal,
    myDecimal,
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

// const code = writeYourCode.toString();
const { myDecimal } = writeYourCode();

describe('17 - Create Decimal Numbers with JavaScript', () => {
  it('`myDecimal` should be a number.', () => {
    assert(typeof myDecimal === 'number');
  });
  it('`myDecimal` should have a decimal point', async () => {
    assert(myDecimal % 1 != 0);
  });
});
