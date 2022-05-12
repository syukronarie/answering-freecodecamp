const __helpers = require('../../helpers');

/**
 * Divide One Decimal by Another with JavaScript
 * Todo: Change the `0.0` so that `quotient` will equal to `2.2`.
 * * The variable `quotient` should equal `2.2`
 * * You should use the `/` operator to divide 4.4 by 2
 */

function writeYourCode() {
  // write your code below

  const quotient = 4.4 / 2.0; // Change this line

  return {
    quotient,
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
const { quotient } = writeYourCode();

describe('19 - Divide One Decimal by Another with JavaScript', () => {
  it('The variable `quotient` should equal `2.2`', () => {
    assert(quotient === 2.2);
  });
  it('You should use the `/` operator to divide 4.4 by 2', async () => {
    assert(/4\.40*\s*\/\s*2\.*0*/.test(code));
  });
  it('The quotient variable should only be assigned once', () => {
    assert(code.match(/const\s*quotient/g).length === 1);
  });
});
