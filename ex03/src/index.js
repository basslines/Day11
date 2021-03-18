var myPetsArray = ["Dog", "Cat"];

function myArrayFunction(arr) {
  var myNewPets = [...arr];

  myNewPets.push("Bird");
  myNewPets.push("Fish");

  var firstPet = myNewPets.shift();
  var lastPet = myNewPets.pop();

  myNewPets.unshift("Lion");

  return myNewPets;
}

console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;
