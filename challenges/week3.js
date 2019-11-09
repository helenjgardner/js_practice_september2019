function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let newArr = nums.map(function (item) {
    return item * item;
  })
  return newArr;
}


function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let finalWord = words[0].toLowerCase();
  for (let i = 1; i < words.length; i++) {
    let firstLetter = words[i].slice(0, 1).toUpperCase();
    // going to make them all lower case regardless of how they started
    let rest = words[i].slice(1).toLowerCase();
    finalWord = finalWord + firstLetter + rest;
  }
  return finalWord;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let total = 0;
  people.forEach(function (item) {
    total = total + item.subjects.length;
  })
  return total;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let result = -1;
  let counter = 0;
  // use while loop to jump out as soon as result is found
  while (counter < menu.length && result === -1) {
    result = menu[counter].ingredients.indexOf(ingredient);
    counter++;
  }
  return result > -1;  //if -1 return false as value not found, else return true

}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let newArr = [];
  // for each item in array 1 check each item in array 2
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      // if there is a match then
      if (arr1[i] === arr2[j]) {
        // if value of array 2 not in array that is building up then push      
        if (newArr.indexOf(arr2[j]) === -1) {
          newArr.push(arr1[i]);
        }
      }
    }
  }
  // empty array for sorted values
  // chose not to use array.sort as unreliable
  let sortedArr = [];

  // put length into variable as appears to re-evaluate in for loop declaration
  let len = newArr.length;

  for (let k = 0; k < len; k++) {
    // get min
    let min = Math.min(...newArr);
    // push into new array
    sortedArr.push(min);
    // get position
    let pos = newArr.indexOf(min);
    // remove from old array
    newArr.splice(pos, 1);
  }
  return sortedArr;
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
