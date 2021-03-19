function mySplice(arr1, arr2, n) {
  var newArr1 = [...arr1].reverse();
  var newArr2 = [...arr2];

  newArr2.splice(n, 0, ...newArr1);

  return newArr2;
}

console.log(mySplice([1, 2, 3], [4, 5], 1));
console.log(mySplice([1, 2, 3], [4, 5], 2));
console.log(mySplice(["b", "c"], ["a", "d"], 1));
console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2));
module.exports = mySplice;
