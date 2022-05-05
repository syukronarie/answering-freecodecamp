/**
 * Assigning the Value of One Variable to Another
 * Todo: Assign the contents of a to variable b.
 */

var a;
a = 10;
var b;
b = a;

const { assert } = require('chai');

describe('Assigning the value of one variable to another', () => {
	it('should assign value variable a into b', () => {
		assert(a === 10);
	});
});
