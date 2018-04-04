const getSum = require('../lib/numbers.js');

describe('sum numbers in string', () => {
    it('should sum all sequence numbers in string', () => {
        const stringWithNumbers = '12345678';
        expect(getSum(stringWithNumbers)).toBe(36);
    });

    it('should sum all numbers in a string with letters', () => {
        const stringWithNumbers = 'a1a2a2b3';
        expect(getSum(stringWithNumbers)).toBe(8);
    });

    it('should return 0 to a string without numbers', () => {
        const stringWithNumbers = 'saddasdas';
        expect(getSum(stringWithNumbers)).toBe(0);
    });

    it('should sum all sequence numbers in a string with letters', () => {
        const stringWithNumbers = 'asd123ads';
        expect(getSum(stringWithNumbers)).toBe(6);
    });

    it('should return 0 to a empty string', () => {
        const stringWithNumbers = '';
        expect(getSum(stringWithNumbers)).toBe(0);
    });

    it('should return 0 to a null and undefined value', () => {
        expect(getSum(null)).toBe(0);
        expect(getSum(undefined)).toBe(0);
    });

    it('should return the value for a string with 1 letter', () => {
        expect(getSum('a')).toBe(0);
        expect(getSum('1')).toBe(1);
    });
});
