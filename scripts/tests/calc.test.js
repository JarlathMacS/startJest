const addition = require('../calc');

describe('Calculator', () => {
    describe('Add function', () => {
        test('should return 42 for 20 + 22', () => {
            expect(addition(20, 22)).toBe(42);
        });
    });
    describe('Minus function', () => {});
    describe('Multiply function', () => {});
    describe('Divide function', () => {});
});
