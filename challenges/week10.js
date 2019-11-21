/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  if (typeof (n) != 'number') throw new Error("n must be a number");
  if (n < 0) throw new Error("n must be positive");
  if (n >= 0 && n < 10) return n;
  const reducer = (accumulator, currentValue) => Number(accumulator) + Number(currentValue);
  return n.toString().split('').reduce(reducer);
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step = 1) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (typeof (start) != 'number') throw new Error("start must be a number");
  if (typeof (end) != 'number') throw new Error("end must be a number");
  if (typeof (step) != 'number') throw new Error("step must be a number");
  if (step < 1) throw new Error("step must be a positive number");
  if (end < start) throw new Error("start must be less than end");
  let myArray = [];
  for (let i = start; i <= end; i += step) {
    myArray.push(i);
  }
  return myArray;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  if (!Array.isArray(users) || users.length === 0) throw new Error("users must be an array");
  let resultArr = [];
  users.forEach((item) => {
    let total = 0;
    item.screenTime.forEach(subItem => {
      if (subItem.date === date) {
        for (let key in subItem.usage) {
          total += subItem.usage[key];
        }
        if (total > 100) {
          resultArr.push(item.username);
        }
      }
    })
  })
  return resultArr;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  if (hexStr.slice(0, 1) != '#') throw new Error("first character must be #");
  const rVal = parseInt(hexStr.slice(1, 3), 16);
  const gVal = parseInt(hexStr.slice(3, 5), 16);
  const bVal = parseInt(hexStr.slice(5), 16);

  return "rgb(" + rVal + "," + gVal + "," + bVal + ")";
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
  if (board.length === 0) throw new Error("board needs to be populated");
  if (board.length < 3) throw new Error("board needs to be 3x3");

  // function that checks 3 elements of an array
  // match each other
  // takes obj
  // returns first element

  const examine = (pos) => {
    if (board[pos.one_r][pos.one_c] === board[pos.two_r][pos.two_c]
      && board[pos.one_r][pos.one_c] === board[pos.three_r][pos.three_c]) return board[pos.one_r][pos.one_c];
  }
  // check first row and if no match subsequent rows
  let row = 0;
  let rowCoord = {
    one_r: row, one_c: 0, two_r: row, two_c: 1,
    three_r: row, three_c: 2
  };
  if (examine(rowCoord)) return examine(rowCoord);
  else {
    row = 1;
    rowCoord = {
      one_r: row, one_c: 0, two_r: row, two_c: 1,
      three_r: row, three_c: 2
    };
    if (examine(rowCoord)) return examine(rowCoord);
    else {
      row = 2;
      rowCoord = { one_r: row, one_c: 0, two_r: row, two_c: 1, three_r: row, three_c: 2 };
      if (examine(rowCoord)) return examine(rowCoord);
    }
  }
  // now check cols
  let col = 0;
  let colCoord = {
    one_r: 0, one_c: col, two_r: 1, two_c: col,
    three_r: 2, three_c: col
  };
  if (examine(colCoord)) return examine(colCoord); else {
    col = 1;
    colCoord = {
      one_r: 0, one_c: col, two_r: 1, two_c: col,
      three_r: 2, three_c: col
    };
    if (examine(colCoord)) return examine(colCoord); else {
      col = 2;
      colCoord = {
        one_r: 0, one_c: col, two_r: 1, two_c: col,
        three_r: 2, three_c: col
      };
      if (examine(colCoord)) return examine(colCoord);
    }
  }

  // now check diagonals
  let coord = {
    one_r: 0, one_c: 0, two_r: 1, two_c: 1,
    three_r: 2, three_c: 2
  };
  if (examine(coord)) return examine(coord);
  else {
    coord = {
      one_r: 2, one_c: 0, two_r: 1, two_c: 1,
      three_r: 0, three_c: 2
    };
    if (examine(coord)) return examine(coord);
    else return null;
  }
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
