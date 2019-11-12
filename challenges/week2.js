function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city === "Manchester";
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return Math.ceil(people / 40);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let total = 0;
  arr.forEach(function (item) {
    if (item === "sheep") {
      total++;
    }
  })
  return total;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // for manchester postcode first letter has to be M and second letter not a character
  let postCode = person.address.postCode;
  let secondLetterIsChar = isNaN(postCode.slice(1, 2));
  return postCode.slice(0, 1) === "M"
    && !secondLetterIsChar;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
