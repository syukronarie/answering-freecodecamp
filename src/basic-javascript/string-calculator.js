const add = (inputString) => {
	if (inputString === '') {
		return 0;
	}

	let result = 0;
	const inputStrings = inputString.split(',');

	for (let i = 0; i < inputStrings.length; i++) {
		result += parseInt(inputStrings[i]);
	}

	return result;
};

describe('stringCalculator', () => {
	describe('when an empty string is passed in', () => {
		it('returns 0', () => {
			const result = add('');
			assert(result === 0);
		});
	});

	describe('when a number is passed in', () => {
		it('returns the number', () => {
			const result = add('2');
			assert(result === 2);
		});
	});

	describe('when string is passed in', () => {
		it('returns NaN', () => {
			const result = add('a');
			assert(isNaN(result));
		});
	});

	describe('when "1,2" is passed in', () => {
		it('returns 3', () => {
			const result = add('1,2');
			assert(result === 3);
		});
	});
});
