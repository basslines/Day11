var myArray01 = ["hello", "hey"];
var myArray02 = ["hello", "Hello"];
var myArray03 = ["Mary", "Army"];
var myArray04 = ["Mary", "Aarmy"];
var myArray05 = ["Alien", "line"];
var myArray06 = ["Floor", "for"];
var myArray07 = ["Hello", "neo"];
var myArray08 = ["voodoo", "no"];
var myArray09 = ["ate", "date"];
var myArray10 = ["Tiger", "Zebra"];
var myArray11 = ["Noel", "Ole"];

function myMutation(arr) {
  var firstStringArray = arr[0].toLowerCase().split("");
  var secondStringArray = arr[1].toLowerCase().split("");

  var result = true;

  for (i = 0; i < secondStringArray.length; i++) {
    result = result && firstStringArray.includes(secondStringArray[i]);
  }

  return result;
}

console.log(myMutation(myArray01));
console.log(myMutation(myArray02));
console.log(myMutation(myArray03));
console.log(myMutation(myArray04));
console.log(myMutation(myArray05));
console.log(myMutation(myArray06));
console.log(myMutation(myArray07));
console.log(myMutation(myArray08));
console.log(myMutation(myArray09));
console.log(myMutation(myArray10));
console.log(myMutation(myArray11));
module.exports = myMutation;
