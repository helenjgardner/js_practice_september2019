function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let newArray = nums.filter(function (item) {
    return item < 1;
  })

  return newArray;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let newArray = names.filter(item => {
    return item.slice(0, 1) === char;
  })
  return newArray;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let newArray = words.filter(item => {
    return item.slice(0, 3) === 'to ';
  })
  return newArray;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let newArray = nums.filter(function (n) {
    return Number.isInteger(n);
  })
  return newArray;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let newArray = users.map(n => {
    return n.data.city.displayName
  })
  return newArray;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let newArray = nums.map(n => {
    let result = Math.sqrt(n);
    return Number(result.toFixed(2));
  })
  return newArray;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let newArray = sentences.filter(function (n) {
    return n.toLowerCase().indexOf(str.toLowerCase()) > -1;
  })
  return newArray;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let newArray = triangles.map(item => {
    return Math.max(...item);
  })
  return newArray;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
