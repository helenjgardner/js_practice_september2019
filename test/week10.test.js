const { sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner } = require("../challenges/week10");

describe("sumDigits", () => {
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
    test("function returns sum of digits", () => {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(2)).toBe(2);
        expect(sumDigits(0)).toBe(0);
        expect(sumDigits(20)).toBe(2);
        expect(sumDigits(98)).toBe(17);
        expect(sumDigits(111122228837262)).toBe(48)
        expect(sumDigits(1000200010000009)).toBe(13)
    })

});

describe("createRange", () => {
    test("function throws an error when start is not provided", () => {
        expect(() => {
            createRange(undefined, 2, 1)
        }).toThrow("start is required");
    });
    test("function throws an error when end is not provided", () => {
        expect(() => {
            createRange(2, undefined, 1)
        }).toThrow("end is required");
    });
    test("function throws an error when any parameter is not a number", () => {
        expect(() => {
            createRange('a', 2, 1)
        }).toThrow("start must be a number");
        expect(() => {
            createRange(1, 'b', 1)
        }).toThrow("end must be a number");
        expect(() => {
            createRange(1, 2, 'a')
        }).toThrow("step must be a number");
    });
    test("function throws an error when end is less than start", () => {
        expect(() => {
            createRange(10, 2, 1)
        }).toThrow("start must be less than end");
    });
    test("function throws an error when step is less than 1", () => {
        expect(() => {
            createRange(1, 2, -1)
        }).toThrow("step must be a positive number");
    });
    test("that function creates range", () => {
        expect(createRange(1, 10, 1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        expect(createRange(3, 9, 3)).toEqual([3, 6, 9])
        expect(createRange(1, 20, 4)).toEqual([1, 5, 9, 13, 17])
        expect(createRange(-10, -4, 2)).toEqual([-10, -8, -6, -4])
        expect(createRange(-10, 4, 2)).toEqual([-10, -8, -6, -4, -2, 0, 2, 4])
    });
    test("that function creates range when step is not defined", () => {
        expect(createRange(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        expect(createRange(2, 6)).toEqual([2, 3, 4, 5, 6])
    });
});

describe("getScreentimeAlertList", () => {
    test("getScreentimeAlertList throws error if list of users is not passed", () => {
        expect(() => {
            getScreentimeAlertList(undefined, "2019-05-01")
        }).toThrow("users is required")
    });
    test("getScreentimeAlertList throws error if date  is not passed", () => {
        expect(() => {
            getScreentimeAlertList([{ username: 'hgardner' }])
        }).toThrow("date is required")
    });
    test("getScreentimeAlertList throws error if users is not an array or is empty", () => {
        expect(() => {
            getScreentimeAlertList('a', "2019-10-05")
        }).toThrow("users must be an array")
        expect(() => {
            getScreentimeAlertList([], "2019-10-05")
        }).toThrow("users must be an array")
    });
    test("getScreentimeAlertList returns array of userids where screen time usage is greater than 100", () => {
        const myArray = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-05-02", usage: { mapMyRun: 50, whatsApp: 50, facebook: 0, safari: 10 } },
                    { date: "2019-05-04", usage: { mapMyRun: 100, whatsApp: 0, facebook: 0, safari: 0 } },
                    { date: "2019-06-14", usage: { mapMyRun: 70, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            },
        ];
        expect(getScreentimeAlertList(myArray, "2019-05-04")).toEqual(["beth_1234"]);
        expect(getScreentimeAlertList(myArray, "2019-05-02")).toEqual(["beth_1234", "sam_j_1989"]);
        expect(getScreentimeAlertList(myArray, "2019-06-14")).toEqual(["sam_j_1989"]);
    });
    test("getScreentimeAlertList returns empty array if screen time requirement is not met", () => {
        const myArray = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } }
                ]
            }
        ];
        expect(getScreentimeAlertList(myArray, "2019-05-04")).toEqual([]);
    });
});
describe("hexToRGB", () => {
    test("hexToRGB throws error if hexvalue is not passed", () => {
        expect(() => {
            hexToRGB()
        }).toThrow("hexStr is required")
        expect(() => {
            hexToRGB('64010D')
        }).toThrow("first character must be #")
    });
    test("hexToRGB returns", () => {
        expect(hexToRGB("#FF1133")).toBe('rgb(255,17,51)')
        expect(hexToRGB("#0A11FF")).toBe('rgb(10,17,255)')
        expect(hexToRGB("#64010D")).toBe('rgb(100,1,13)')
    })
});

describe("findWinner", () => {
    test("findWinner throws an error if board is not passed", () => {
        expect(() => {
            findWinner()
        }).toThrow("board is required")
    })
    test("findWinner throws an error if board is empty or not 3 sub arrays", () => {
        expect(() => {
            findWinner([])
        }).toThrow("board needs to be populated")
        expect(() => {
            findWinner([["X", "X", "O"]])
        }).toThrow("board needs to be 3x3")
        expect(() => {
            findWinner([["X", "X", "O"], ["X", "X", "O"]])
        }).toThrow("board needs to be 3x3")
    })
    test("findWinner returns X when X is winner", () => {
        let result = [
            ["X", "X", "X"],
            ["O", null, "O"],
            ["X", null, "O"]
        ];
        expect(findWinner(result)).toBe("X")
        result = [
            ["O", null, "O"],
            ["X", null, "O"],
            ["X", "X", "X"]
        ];
        expect(findWinner(result)).toBe("X")
        result = [
            ["X", null, "O"],
            ["X", null, "O"],
            ["X", "X", null]
        ];
        expect(findWinner(result)).toBe("X")
        result = [
            ["O", null, "X"],
            ["X", null, "X"],
            ["X", null, "X"]
        ];
        expect(findWinner(result)).toBe("X")
    })
    test("findWinner returns O when O is winner", () => {
        let result = [
            ["X", null, "X"],
            ["O", "O", "O"],
            ["X", null, "O"]
        ];
        expect(findWinner(result)).toBe("O")
        result = [
            ["X", "O", "X"],
            ["X", "O", "O"],
            ["O", "O", null]
        ];
        expect(findWinner(result)).toBe("O")
        result = [
            ["X", "X", "O"],
            ["X", "O", "O"],
            ["O", "O", null]
        ];
        expect(findWinner(result)).toBe("O")
        result = [
            ["O", "X", "O"],
            ["X", "O", "X"],
            ["X", "O", "O"]
        ];
        expect(findWinner(result)).toBe("O")
    })
    test("findWinner returns '' when there is no winner", () => {
        let result = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        expect(findWinner(result)).toBe(null)
        result = [
            ["X", null, "X"],
            ["O", "X", null],
            ["O", null, "O"],
        ];
        expect(findWinner(result)).toBe(null)
    });
});    