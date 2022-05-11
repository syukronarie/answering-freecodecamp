/**
 * Declare a Read-Only Variable with the const Keyword
 * Todo: Change the code so that all variables are declared using `let` or `const`. Use `let` when you want the variable to change, and `const` when you want the variable to remain constant. Also, rename variables declared with `const` to conform to common practices.
 * * `var` should not exist in the code.
 * * You should change `fCC` to all uppercase.
 * * `FCC` should be a constant variable declared with `const`.
 * * `fact` should be declared with `let`.
 * * `console.log` should be changed to print the `FCC` and `fact` variables.
 */

function writeYourCode() {
  // write your code below
  const FCC = 'freeCodeCamp';
  let fact = 'is cool!';

  fact = 'is awesome!';
  console.log(FCC, fact);

  // ! don't remove this for testing cases
  return {
    FCC,
    fact,
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
const { FCC, fact } = writeYourCode();

describe('10 - Declare a Read-Only Variable with the const Keyword', () => {
  it('`var` should not exist in the code.', () => {
    assert.notMatch(code, /var/g);
  });
  it('You should change `fCC` to all uppercase.', () => {
    assert.match(code, /FCC/g);
    assert.notMatch(code, /fCC/g);
  });
  it('`FCC` should be a constant variable declared with `const`.', () => {
    assert.equal(FCC, 'freeCodeCamp');
    assert.match(code, /const\s+FCC/g);
  });
  it('`fact` should be declared with `let`.', () => {
    assert.equal(fact, 'is awesome!');
    assert.match(code, /(let\s+fact)/g);
  });
  it('`console.log` should be changed to print the `FCC` and `fact` variables.', () => {
    assert.match(code, /console\.log\(\s*FCC\s*\,\s*fact\s*\)\s*;?/g);
  });
});
