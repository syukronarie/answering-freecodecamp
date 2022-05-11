const __helpers = require('../../helpers');

/**
 * Subtract One Number from Another with JavaScript
 * Todo: Change the `0` so the difference is `12`.
 * * The variable `difference` should be equal to 12.
 * * You should only subtract one number from 45.
 */

function writeYourCode() {
  // write your code below
  const difference = 45 - 33;

  return {
    difference,
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
const { difference } = writeYourCode();

describe('12 - Subtract One Number from Another with JavaScript', () => {
  it('The variable `difference` should be equal to 12.', () => {
    assert(difference === 12);
  });
  it('You should only subtract one number from 45.', () => {
    assert(/difference=45-33;?/.test(__helpers.removeWhiteSpace(code)));
  });
});
