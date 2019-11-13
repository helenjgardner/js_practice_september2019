const {sumMultiples} = require("../challenges/week9");

describe("sumMultiples",() => {
  test("it returns sum of any numbers that are a 3 or a 5", () =>{
     const result= sumMultiples([1,3,5]);
     const expected=8;
     expect(result).toBe(expected);
  });
});