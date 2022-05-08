/**
 * Understanding Case Sensitivity in Variables
 * Todo: Modify the existing declarations and assignments so their names use camelCase.
 * ! Do not create any new variables.
 * * `studlyCapVar` should be defined and have a value of `10`.
 * * `properCamelCase` should be defined and have a value of the string `A String`.
 * * `titleCaseOver` should be defined and have a value of `9000`.
 * * `studlyCapVar` should use camelCase in both declaration and assignment sections.
 * * `properCamelCase` should use camelCase in both declaration and assignment sections.
 * * `titleCaseOver` should use camelCase in both declaration and assignment sections.
 */

// Write your code below
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = 'A String';
titleCaseOver = 9000;

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

function caseSensitivity(object) {
  if (typeof object !== 'undefined') {
    const { studlyCapVar, properCamelCase, titleCaseOver } = object;
    return {
      studlyCapVar,
      properCamelCase,
      titleCaseOver,
    };
  }

  return false;
}

const mockedObject = {
  studlyCapVar,
  properCamelCase,
  titleCaseOver,
};

const code = JSON.stringify(caseSensitivity(mockedObject));

describe('08 - Understanding Case Sensitivity in Variables', () => {
  it('`studlyCapVar` should be defined and have a value of `10`.', () => {
    assert(typeof studlyCapVar !== 'undefined' && studlyCapVar === 10);
  });
  it('`properCamelCase` should be defined and have a value of the string `A String`.', () => {
    assert(
      typeof properCamelCase !== 'undefined' && properCamelCase === 'A String'
    );
  });
  it('`titleCaseOver` should be defined and have a value of `9000`.', () => {
    assert(typeof titleCaseOver !== 'undefined' && titleCaseOver === 9000);
  });
  it('`studlyCapVar` should use camelCase in both declaration and assignment sections.', () => {
    assert(code.match(/studlyCapVar/g).length === 1);
  });
  it('`properCamelCase` should use camelCase in both declaration and assignment sections.', () => {
    assert(code.match(/properCamelCase/g).length === 1);
  });
  it('`titleCaseOver` should use camelCase in both declaration and assignment sections.', () => {
    assert(code.match(/titleCaseOver/g).length === 1);
  });
  it('should return deep equal object', () => {
    const expected = {
      studlyCapVar: 10,
      properCamelCase: 'A String',
      titleCaseOver: 9000,
    };
    assert.deepEqual(caseSensitivity(mockedObject), expected);
  });
});
