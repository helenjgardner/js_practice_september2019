function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  let first=word.slice(0,1);
  let second=word.slice(1);
  let newWord=first.toUpperCase()+second;
  return newWord;
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.slice(0,1)+'.'+lastName.slice(0,1);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let result=originalPrice + (originalPrice*(vatRate/100));
  let resultDP=result.toFixed(2);
  return Number(resultDP);
 
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let preRound= originalPrice-(originalPrice*(reduction/100));
  let result=preRound.toFixed(2);
  return Number(result);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let len=str.length;
  let startPos=len/2;
  let result=str;
  if (len%2=== 0){ 
    //even number
    result=str.slice(startPos-1,startPos+1);
  }
  else {
    startPos=Math.trunc(startPos); //startPos is not int yet
    result=str.slice(startPos,startPos+1);
  }
  return result;
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let newWord=word[word.length-1];
  for (i=word.length-2;i>=0;i--){
    newWord=newWord+word[i];
  }
  return newWord;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let reversedWords = words.map(function rev(n) {
    let newWord = n[n.length - 1];
    for (i = n.length - 2; i >= 0; i--) {
      newWord = newWord + n[i];
    }
    return newWord;
  })
  return reversedWords;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  console.log(users.length);
  let linuxArray=users.filter(function (user){
    return user.type==="Linux";
  })
  return linuxArray.length;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let total=0;
  scores.forEach(function (item){
    total+=item;
  })
  let preRound= total/scores.length;
  let result=preRound.toFixed(2);
  return Number(result);
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n%3 ===0 && n%5 ===0){
    return 'fizzbuzz';
  }
  else if (n%3===0){
    return 'fizz';
  }
  else if (n%5===0){
    return 'buzz';
  }
  else {return n}
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
