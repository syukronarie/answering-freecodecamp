const __helpers = require('../../helpers');

/**
 * Finding a Remainder in JavaScript
 * Todo: Set `remainder` equal to the remainder of `11` divided by `3` using the remainder (`%`) operator.
 * * The variable `remainder` should be initialized
 * * The value of `remainder` should be `2`
 */

function writeYourCode() {
  // write your code below

  const remainder = 11 % 3;

  return {
    remainder,
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
const { remainder } = writeYourCode();

describe('20 - Finding a Remainder in JavaScript', () => {
  it('The variable `remainder` should be initialized', () => {
    assert(/(const|let|var)\s+?remainder/.test(code));
  });
  it('The value of `remainder` should be `2`', async () => {
    assert(remainder === 2);
  });
  it('You should use the `%` operator', () => {
    assert(/\s+?remainder\s*?=\s*?.*%.*;?/.test(code));
  });
});
