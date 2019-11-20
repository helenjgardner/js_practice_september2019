const {sumDigits, createRange} = require("../challenges/week10");

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

describe.only("createRange",()=>{
    test("function throws an error when start is not provided",()=>{
        expect(()=>{
            createRange(undefined,2,1)}).toThrow("start is required");
    });
    test("function throws an error when end is not provided",()=>{
        expect(()=>{
            createRange(2,undefined,1)}).toThrow("end is required");
    });
    test("function throws an error when any parameter is not a number",()=>{
        expect(()=>{
            createRange('a',2,1)}).toThrow("start must be a number");
        expect(()=>{
            createRange(1,'b',1)}).toThrow("end must be a number");
        expect(()=>{
            createRange(1,2,'a')}).toThrow("step must be a number");
    });
    test("function throws an error when end is less than start",()=>{
        expect(()=>{
            createRange(10,2,1)}).toThrow("start must be less than end");
        });
    test("function throws an error when step is less than 1",()=>{
        expect(()=>{
            createRange(1,2,-1)}).toThrow("step must be a positive number");
    });        
    test("that function creates range",()=>{
      expect(createRange(1,10,1)).toEqual([1,2,3,4,5,6,7,8,9,10])
      expect(createRange(3,9,3)).toEqual([3,6,9])
      expect(createRange(1,20,4)).toEqual([1,5,9,13,17])
      expect(createRange(-10,-4,2)).toEqual([-10,-8,-6,-4])
      expect(createRange(-10,4,2)).toEqual([-10,-8,-6,-4,-2,0,2,4])
    });
    test("that function creates range when step is not defined",()=>{
    expect(createRange(1,10)).toEqual([1,2,3,4,5,6,7,8,9,10])
    expect(createRange(2,6)).toEqual([2,3,4,5,6])
    });
});  