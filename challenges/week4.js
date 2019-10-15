function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // let newArray = [];
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] < 1) {
  //     newArray.push(nums[i]);
  //   }
  // }
  /////////////////////////////
  // nums.forEach(function (item) {
  //   if (item < 1) { newArray.push(item) }
  // })
  //this one can be a filter
  let newArray = nums.filter(function (item) {
    return item < 1;
  })

  return newArray;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let newArray = [];
  // for (let i = 0; i < names.length; i++) {
  //   if (names[i].slice(0, 1) === char) {
  //     newArray.push(names[i]);
  //   }
  // }
  names.forEach(function (item) {
    if (item.slice(0, 1) === char) {
      newArray.push(item);
    }
  })
  return newArray;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let newArray = [];
  // for (let i = 0; i < words.length; i++) {
  //   if (words[i].slice(0, 3) === 'to ') {
  //     newArray.push(words[i]);
  //   }
  // }
  words.forEach(function (item) {
    if (item.slice(0, 3) === 'to ') {
      newArray.push(item);
    }
  })
  return newArray;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let newArray = [];
  // for (let i = 0; i < nums.length; i++) {
  //   if (Number.isInteger(nums[i])) {
  //     newArray.push(nums[i]);
  //   }
  // }
  nums.forEach(function (item) {
    if (Number.isInteger(item)) {
      newArray.push(item);
    }
  })
  return newArray;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let newArray = [];
  // for (let i = 0; i < users.length; i++) {
  //   newArray.push((users[i].data.city.displayName));
  // }
  users.forEach((n) => {
    newArray.push(n.data.city.displayName);
  })
  return newArray;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let newArray = [];
  // for (let i = 0; i < nums.length; i++) {
  //   let result = Math.sqrt(nums[i]);
  //   let resultDP = result.toFixed(2);
  //   newArray.push(Number(resultDP));
  // }(
  nums.forEach((item) => {
    let result = Math.sqrt(item);
    let resultDP = result.toFixed(2);
    newArray.push(Number(resultDP));
  })
  return newArray;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let newArray = [];
  // for (let i = 0; i < sentences.length; i++) {
  //   if (sentences[i].toLowerCase().indexOf(str.toLowerCase()) > -1) {
  //     newArray.push(sentences[i]);
  //   }
  // }
  sentences.forEach(function (n) {
    if (n.toLowerCase().indexOf(str.toLowerCase()) > -1) {
      newArray.push(n);
    }
  })
  return newArray;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let newArray = [];
  // for (let i = 0; i < triangles.length; i++) {
  //   let max = Math.max(...triangles[i]);
  //   newArray.push(max);
  // }
  triangles.forEach(function (item) {
    let max = Math.max(...item);
    newArray.push(max);
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
