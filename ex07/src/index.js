var myArray01 = [
  [13, 27, 18, 26],
  [4, 5, 1, 3],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];
var myArray02 = [
  [4, 9, 1, 3],
  [13, 35, 18, 26],
  [32, 35, 97, 39],
  [1000000, 1001, 857, 1],
];
var myArray03 = [
  [17, 23, 25, 12],
  [25, 7, 34, 48],
  [4, 10, 18, 21],
  [72, 3, 17, 10],
];

function largestNumFromArr(arr) {
  var maxNumArray = [];

  for (i = 0; i < arr.length; i++) {
    maxNumArray.push(Math.max(...arr[i]));
  }

  return maxNumArray;
}

console.log(largestNumFromArr(myArray01));
console.log(largestNumFromArr(myArray02));
console.log(largestNumFromArr(myArray03));
module.exports = largestNumFromArr;
