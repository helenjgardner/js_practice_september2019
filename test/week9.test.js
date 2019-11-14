const {sumMultiples, 
  isValidDNA} = require("../challenges/week9");

describe("sumMultiples",() => {
  test("function returns an error when not passed array", () =>{
     expect(()=>{ 
       sumMultiples();
     }).toThrow("array is required");
     expect(()=>{ 
      sumMultiples("foo");
    }).toThrow("array is required");
    expect(()=>{ 
      sumMultiples(5);
    }).toThrow("array is required");
  });

  test("it returns sum of any numbers that are a 3 or a 5", () =>{
     const result= sumMultiples([2,3,5]);
     const expected=8;
     expect(result).toBe(expected);
     expect(sumMultiples([3,6,9])).toBe(18);
     expect(sumMultiples([10,15])).toBe(25);
     expect(sumMultiples([3,12])).toBe(15);
  });
  test("it deals with decimals", () =>{
     expect(sumMultiples([1.2,3,5.5,5.0])).toBe(8);
  });
  test("it deals with larger array", () =>{
    expect(sumMultiples([1.2,3,5.5,5.0,10,12,21,3,4,2.3,11])).toBe(54);
  });
  test("it returns 0 when there are no multiples of 3 or 5", () =>{
    expect(sumMultiples([1.2,2,4,2,11])).toBe(0);
  });
  test("function deals with negative numbers", () =>{
     expect(sumMultiples([-3,-5])).toBe(-8);
  });
});


describe.only("isValidDNA", () =>{
  test("function throws error when no string is passed",() =>{
    expect(() => {
      isValidDNA();}).toThrow("str is required");
  });
  test("function returns false when string is empty",() => {
    expect(isValidDNA("")).toBe(false);
  });
  test("function returns true when string only contains C G T A", ()=>{
      expect(isValidDNA("CGA")).toBe(true);
      expect(isValidDNA("CCGGAATTCCAAGGTT")).toBe(true);
  });
  test("function returns false when string doesn't contain just C G A T",()=>{
     expect(isValidDNA("BYH")).toBe(false);
  });
  test("function ignores case", () =>{
     expect(isValidDNA("cgattagc")).toBe(true);
     expect(isValidDNA("hnq")).toBe(false);
  });

});