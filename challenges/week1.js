function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // retrieve just first character and then rest of string
  let first = word.slice(0, 1);
  let second = word.slice(1);
  // concatenate both with first character transformed to uppper case
  let newWord = first.toUpperCase() + second;
  return newWord;
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  // return first character of firstName concatenated with a . and then secondName
  return firstName.slice(0, 1).concat('.', lastName.slice(0, 1));
  // previous alternative version
  // return firstName.slice(0, 1) + '.' + lastName.slice(0, 1);

}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (originalPrice < 0) throw new Error("originalPrice must be positive");
  if (vatRate === undefined) throw new Error("vatRate is required");
  if (vatRate > 100 || vatRate < 0) throw new Error("vatRate must be between 0 and 100");
  // Q: how to test error returns in jest??

  let result = originalPrice + (originalPrice * (vatRate / 100));
  let resultDP = result.toFixed(2);  // need 2 decimal places
  return Number(resultDP);  // convert back to number
  // Q: not sure if toFixed is best way of doing this
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (originalPrice < 0) throw new Error("originalPrice must be a positive number");
  if (reduction === undefined) throw new Error("reduction is required");
  if (reduction > 100 || reduction < 0) throw new Error("vatRate must be between 0 and 100");
  let preRound = originalPrice - (originalPrice * (reduction / 100));
  let result = preRound.toFixed(2);
  return Number(result);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let startPos = str.length / 2; //define middle of string
  let result;
  if (str.length % 2 === 0) {
    //even number
    result = str.slice(startPos - 1, startPos + 1); //retrieve middle two
  }
  else {
    startPos = Math.trunc(startPos); //startPos is not int for an odd number length
    result = str.slice(startPos, startPos + 1);  //retrieve middle
  }
  return result;
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let newWord = word[word.length - 1]; //assume always at least one char - 
  // populate return string with last character to start
  for (let i = word.length - 2; i >= 0; i--) {  //offset array by one because we already have last char
    newWord = newWord + word[i];  // get all chars in reverse order and create new string
  }
  return newWord;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let reversedWords = words.map(function rev(n) {
    let newWord = n[n.length - 1];//assume always at least one char - 
    // populate return string with last character to start
    for (let i = n.length - 2; i >= 0; i--) {
      newWord = newWord + n[i]; // get all chars in reverse order and create new string
    }
    return newWord;
  })
  return reversedWords;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let linuxArray = users.filter(function (user) {
    return user.type === "Linux"; // filter to return where type is equal to 'Linux'
  })
  return linuxArray.length;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let total = 0;
  scores.forEach(function (item) {  //retrieve total
    total += item;
  })
  let preRound = total / scores.length;  //divide total by number of elements
  let result = preRound.toFixed(2);  //to 2 decimal places
  return Number(result);  //return as a number
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 3 === 0 && n % 5 === 0) {
    return 'fizzbuzz';
  }
  else if (n % 3 === 0) {
    return 'fizz';
  }
  else if (n % 5 === 0) {
    return 'buzz';
  }
  else { return n }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
