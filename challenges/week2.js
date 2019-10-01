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
  let city = person.address.city;
  let postCode = person.address.postCode;
  return city === "Manchester" && postCode.slice(0, 1) === "M";
  // made assumption that the city had to be Manchester and first digit
  // of postcode 'M'.  
  // If city was Manchester and postcode was not M then false
  // If city wasn't Manchester then false
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
