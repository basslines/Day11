var myArray01 = [[2], [5, 6, 7], [8, 9]];
var myArray02 = [[2.5, 2], [0.5, 0.2], [8]];
var myArray03 = [
  [1, 2],
  [3, 4, 5, 6],
  [7, 8, 9],
];

function multiplyArrayFunction(arr) {
  var product = 1;
  var sum = 0;

  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
      sum = sum + arr[i][j];
    }
  }

  return [product, sum];
}

console.log(multiplyArrayFunction(myArray01));
console.log(multiplyArrayFunction(myArray02));
console.log(multiplyArrayFunction(myArray03));
module.exports = multiplyArrayFunction;
