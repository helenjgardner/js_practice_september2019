/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("array is required");
  if (!Array.isArray(arr)) throw new Error("array is required");
  let grandSum = 0;
  arr.forEach(item => {
    if (item % 3 === 0 || item % 5 === 0) {
      grandSum += item;
    }
  })
  return grandSum;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (typeof (str) !== 'string') throw new Error("str is required")
  if (str === "") return false;

  let newStr = str.replace(/C|A|G|T/gi, '');
  return newStr.length === 0;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * A-> T
 * C -> G
 * T -> A
 * G -> C
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (typeof (str) !== 'string') throw new Error("str is required")
  if (!isValidDNA(str)) throw new Error("valid sequence is required");

  let newStr = str.replace(/A/gi, 'Z');
  newStr = newStr.replace(/T/gi, 'A');
  newStr = newStr.replace(/Z/gi, 'T');
  newStr = newStr.replace(/C/gi, 'X');
  newStr = newStr.replace(/G/gi, 'C');
  newStr = newStr.replace(/X/gi, 'G');
  return newStr;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  if (n <= 1) throw new Error("n must be a positive number gt 1");
  if (typeof (n) !== 'number') throw new Error("n must be a number");
  if (!Number.isInteger(n)) throw new Error("n must be an integer");
  let result = true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      result = false
    }
  }
  return result;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  if (typeof(n) !== 'number') throw new Error ("n must be an integer greater than 0");
  if (n<=0) throw new Error ("n must be an integer greater than 0");
  if (!Number.isInteger(n)) throw new Error ("n must be an integer greater than 0");
  let resultArr=[];
  for (let i=1; i<=n; i++){
    let innerArr=[];
    for (let j=1; j<=n; j++){
      innerArr.push(fill);
    }
    resultArr.push(innerArr);
  }
  return resultArr;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
