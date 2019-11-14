const { sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered } = require("../challenges/week9");

describe("sumMultiples", () => {
  test("function returns an error when not passed array", () => {
    expect(() => {
      sumMultiples();
    }).toThrow("array is required");
    expect(() => {
      sumMultiples("foo");
    }).toThrow("array is required");
    expect(() => {
      sumMultiples(5);
    }).toThrow("array is required");
  });

  test("it returns sum of any numbers that are a 3 or a 5", () => {
    const result = sumMultiples([2, 3, 5]);
    const expected = 8;
    expect(result).toBe(expected);
    expect(sumMultiples([3, 6, 9])).toBe(18);
    expect(sumMultiples([10, 15])).toBe(25);
    expect(sumMultiples([3, 12])).toBe(15);
  });
  test("it deals with decimals", () => {
    expect(sumMultiples([1.2, 3, 5.5, 5.0])).toBe(8);
  });
  test("it deals with larger array", () => {
    expect(sumMultiples([1.2, 3, 5.5, 5.0, 10, 12, 21, 3, 4, 2.3, 11])).toBe(54);
  });
  test("it returns 0 when there are no multiples of 3 or 5", () => {
    expect(sumMultiples([1.2, 2, 4, 2, 11])).toBe(0);
  });
  test("function deals with negative numbers", () => {
    expect(sumMultiples([-3, -5])).toBe(-8);
  });
});


describe("isValidDNA", () => {
  test("function throws error when no string is passed", () => {
    expect(() => {
      isValidDNA();
    }).toThrow("str is required");
  });
  test("function throws an error when a non string is passed", () => {
    expect(() => {
      isValidDNA(3);
    }).toThrow("str is required");
  })
  test("function returns false when string is empty", () => {
    expect(isValidDNA("")).toBe(false);
  });
  test("function returns true when string only contains C G T A", () => {
    expect(isValidDNA("CGA")).toBe(true);
    expect(isValidDNA("CCGGAATTCCAAGGTT")).toBe(true);
  });
  test("function returns false when string doesn't contain just C G A T", () => {
    expect(isValidDNA("BYH")).toBe(false);
  });
  test("function ignores case", () => {
    expect(isValidDNA("cgattagc")).toBe(true);
    expect(isValidDNA("hnq")).toBe(false);
  });

});

describe("getComplementaryDNA", () => {
  test("function throws an error when no str is passed ", () => {
    expect(() => {
      getComplementaryDNA()
    }).toThrow("str is required");
    expect(() => {
      getComplementaryDNA(4)
    }).toThrow("str is required");
  });
  test("function throws an error when invalid DNA sequence passsed", () => {
    expect(() => {
      getComplementaryDNA('JN')
    }).toThrow("valid sequence is required");

  });
  test("function returns correct result", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    expect(getComplementaryDNA("AAAACCCCGGGGTTTT")).toBe("TTTTGGGGCCCCAAAA");
    expect(getComplementaryDNA("ACTGACTG")).toBe("TGACTGAC");

  });
});

describe("isItPrime", () => {
  test("returns an error if no parameter is passed", () => {
    expect(() => {
      isItPrime()
    }).toThrow("n is required")
  })
  test("returns an error if number is less than 1", () => {
    expect(() => {
      isItPrime(-1)
    }).toThrow("n must be a positive number gt 1")
    expect(() => {
      isItPrime(0)
    }).toThrow("n must be a positive number gt 1")
    expect(() => {
      isItPrime(1)
    }).toThrow("n must be a positive number gt 1")
  })

  test("returns an error if parameter is not a number ", () => {
    expect(() => {
      isItPrime("hello")
    }).toThrow("n must be a number")
  })
  test("returns an error if n is not an integer", () => {
    expect(() => {
      isItPrime(1.2)
    }).toThrow("n must be an integer")
  })
  test("returns true when number is prime", () => {
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(47)).toBe(true);
    expect(isItPrime(1217)).toBe(true);
  });
  test("returns false when number is not prime", () => {
    expect(isItPrime(9)).toBe(false);
    expect(isItPrime(25)).toBe(false);
    expect(isItPrime(7000)).toBe(false);
  });

});

describe("createMatrix", () => {
  test("throws an error if n is missing", () => {
    expect(() => {
      createMatrix(undefined, 'dog')
    }).toThrow("n is required")
    expect(() => {
      createMatrix(1)
    }).toThrow("fill is required")
  })
  test("throws an error is n is not an integer ge 1", () => {
    expect(() => {
      createMatrix(0, 'dog')
    }).toThrow("n must be an integer greater than 0")
    expect(() => {
      createMatrix(-1, 'dog')
    }).toThrow("n must be an integer greater than 0")
    expect(() => {
      createMatrix(1.3, 'dog')
    }).toThrow("n must be an integer greater than 0")
  })
  test("returns an array of 1 containing dog when passed 1", () => {
    const expArr = [['dog']];
    expect(createMatrix(1, 'dog')).toEqual(expArr);
  })
  test("returns an array containing 3 arrays with instances of foo when passed 3 and foo", () => {
    const expArr = [
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"]
    ];
    expect(createMatrix(3, "foo")).toEqual(expArr);
  })
})

describe("areWeCovered", () => {
  test("throws an error if staff is not provided", () => {
    expect(() => {
      areWeCovered(undefined, 'Monday')
    }).toThrow("staff is required")
  })
  test("throws an error if day is not provided", () => {
    expect(() => {
      areWeCovered([])
    }).toThrow("day is required")
  })
  test("throws an error if staff is empty", () => {
    expect(() => {
      areWeCovered([], 'Monday')
    }).toThrow("staff must have a value")
  })
  test("throws an error if day is not a string", () => {
    expect(() => {
      areWeCovered([{ name: 'sally', rota: 'Monday' }], 4)
    }).toThrow("day must be a string")
  })
  test("throws an error if day is empty", () => {
    expect(() => {
      areWeCovered([{ name: 'sally', rota: 'Monday' }], "")
    }).toThrow("day must be populated")
  })
  test("returns true if there is staff cover", () => {
    const staff = [{ name: "Tweak", rota: ["Monday", "Tuesday", "Friday"] },
    { name: "Kwazii", rota: ["Monday", "Tuesday", "Friday"] },
    { name: "Barnacles", rota: ["Monday", "Tuesday", "Friday"] }];
    expect(areWeCovered(staff, 'Monday')).toBe(true);
  })
  test("returns true if there more than enough staff cover", () => {
    const staff = [{ name: "Tweak", rota: ["Monday", "Tuesday", "Friday"] },
    { name: "Kwazii", rota: ["Monday", "Tuesday", "Friday"] },
    { name: "Shellington", rota: ["Monday", "Tuesday", "Friday"] },
    { name: "Barnacles", rota: ["Monday", "Tuesday", "Friday"] }];
    expect(areWeCovered(staff, 'Monday')).toBe(true);
    expect(areWeCovered(staff, 'Tuesday')).toBe(true);
  })
  test("returns false if there aren't enough staff", () => {
    const staff = [{ name: "Tweak", rota: ["Monday", "Tuesday", "Friday"] },
    { name: "Kwazii", rota: ["Monday", "Tuesday", "Friday"] },
    { name: "Shellington", rota: ["Saturday", "Tuesday", "Friday"] },
    { name: "Barnacles", rota: ["Monday", "Tuesday", "Friday"] }];
    expect(areWeCovered(staff, 'Wednesday')).toBe(false);
    expect(areWeCovered(staff, 'Sunday')).toBe(false);
  })
})  