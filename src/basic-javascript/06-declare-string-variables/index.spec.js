/**
 * Declare-String-Variables
 * Todo: Create two new string variables: `myFirstName` and `myLastName` and assign them the values of your first and last name, respectively.
 * * Hint:
 * * `myFirstName` should be a string with at least one character in it.
 * * `myLastName` should be a string with at least one character in it.
 */

// write your code below

var myFirstName = 'Arie';
var myLastName = 'Syukron';

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

describe('Declare String Variables', () => {
  it('`myFirstName` should be a string with at least one character in it.', () => {
    assert(
      (function () {
        if (
          typeof myFirstName !== 'undefined' &&
          typeof myFirstName === 'string' &&
          myFirstName.length > 0
        ) {
          return true;
        } else {
          return false;
        }
      })()
    );
  });
  it('`myLastName` should be a string with at least one character in it.', () => {
    assert(
      (function () {
        if (
          typeof myLastName !== 'undefined' &&
          typeof myLastName === 'string' &&
          myLastName.length > 0
        ) {
          return true;
        } else {
          return false;
        }
      })()
    );
  });
});
