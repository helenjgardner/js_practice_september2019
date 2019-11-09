const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let i = nums.indexOf(n);
  if (i === -1 || i + 1 === nums.length) { return null }
  else {
    return nums[i + 1];
  }
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // set blank template for final result
  let result = { 1: 0, 0: 0 };
  // convert str to array
  let nArr = Array.from(str);
  const reducer = (accumulator, currentValue) => Number(accumulator) + Number(currentValue);
  // if you add it up then total is equal to the number of 'ones'
  // had been struggling to see a use for reduce over past few weeks and this appears to be one
  // so chose this method over others to practice using it
  let ones = nArr.reduce(reducer);
  // number of 0s is length minus number of ones
  result[0] = str.length - ones;
  result[1] = ones;
  return result;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // convert to string and then array in order to be able to use reverse function
  let arr = Array.from(n.toString());
  let rev = arr.reverse();
  // use reduce to get it back to one item
  const reducer = (accumulator, currentValue) => accumulator.toString() + currentValue.toString();
  return Number(rev.reduce(reducer));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let grandSum = 0;
  arrs.forEach(item => grandSum = grandSum + item.reduce(reducer))
  return grandSum;
  // potentially try a reduce within a reduce
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) { return arr }
  else {
    // hold first item otherwise it'll get overwritten and lost
    let first = arr[0];
    // replace 'first' item in array with last
    arr[0] = arr[arr.length - 1];
    // replace 'last' item in array with temp holding of first
    arr[arr.length - 1] = first;
    return arr;
  }
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let result = false;
  for (let key in haystack) {
    let value = haystack[key].toString();
    if (value.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1) {
      result = true;
    }
  }
  return result;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  let retObj = {};
  let newStr = str.replace(/[&/\\#, +()$~%.!'":*?<>{}]/g, ' ');
  let arr = newStr.toLowerCase().split(' ');
  arr.forEach(item => {
    if (item !== '') {
      if (retObj[item] === undefined) {
        retObj[item] = 1;
      }
      else {
        retObj[item] += 1;
      }
    }
  })
  return retObj;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
