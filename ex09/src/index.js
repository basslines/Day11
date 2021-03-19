var myArray01 = [7, "ate", "", false, 9];
var myArray02 = ["a", "b", "c"];
var myArray03 = [false, null, 0, NaN, undefined, ""];
var myArray04 = [null, NaN, 1, 2, undefined];

function myBouncer(arr) {
  return arr.filter(function (el) {
    return el;
  });
}

console.log(myBouncer(myArray01));
console.log(myBouncer(myArray02));
console.log(myBouncer(myArray03));
console.log(myBouncer(myArray04));
module.exports = myBouncer;
