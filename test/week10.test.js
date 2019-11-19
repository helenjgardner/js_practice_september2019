const {sumDigits} = require("../challenges/week10");

describe("sumDigits",()=>{
    test("function returns an error when not passed number", () => {
        expect(() => {
            sumDigits();
        }).toThrow("n is required");
    });
    test("function returns an error when n not a number", () => {
        expect(() => {
            sumDigits('1');
        }).toThrow("n must be a number");
    });
    test("function returns an error when n is negative", () => {
        expect(() => {
            sumDigits(-10);
        }).toThrow("n must be positive");
    });
    test("function returns sum of digits",()=>{
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(2)).toBe(2);
        expect(sumDigits(0)).toBe(0);
        expect(sumDigits(20)).toBe(2);
        expect(sumDigits(98)).toBe(17);
        expect(sumDigits(111122228837262)).toBe(48)
        expect(sumDigits(1000200010000009)).toBe(13)
        })

    });