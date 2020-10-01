const multiplyTest = require('./src/methods/multiply');
const { add } = require('.');

test('that is true', () => {
    expect(true).toBe(true);
});

test('9 multiplied by 2 equals 18', () => {
    expect(multiplyTest(2, 9)).toBe(18);

describe('Add function', () => {
	it('should return correct result', () => {
		expect(add(1,2)).toBe(3);
	});

	it('should return correct result when one of args is negative', () => {
		expect(add(-1,1)).toBe(0);
	});

	it('should return correct result when both of args are negative', () => {
		expect(add(-1,-1)).toBe(-2);
	});
});
