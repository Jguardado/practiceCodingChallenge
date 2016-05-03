/*
GlowForge
Write a function that when given an array and a range returns the number of mistakes.

Mistakes are:
Any numbers in the array that are out of range.
Any duplicates and any missing values from the array.

It should return inclusive and exclusive results.

EX: [2,2,2,3,4,5,5] range(3,5)
Should return 6. this is inclusive.
Should return 4. this is exclusive.
*/

// is range an array an object or the result from range()?
// implementation varies for all, but just slightly
var sampleArr = [1, 2, 6, 7, 7, 7, 7, 8, 5, 4];

var range = function (a, b) {
  var result = [];
  for (var i = a; i <= b; i++) {
    result.push(i);
  }

  return result;
};

var mistakeFinder = function (arr, callback) {
  var range = callback;

  var mistakes = [];
  var sortedArr = arr.sort();

  for (var i = 0; i < sortedArr.length; i++) {
    // Any numbers in the array that are out of range.
    if (sortedArr[i] < range[0]) {
      mistakes.push(sortedArr[i]);
    }

    if (sortedArr[i] > range[range.length - 1]) {
      mistakes.push(sortedArr[i]);
    }

    // Any duplicates and any missing values from the array.
    if (sortedArr[i] === sortedArr[i + 1]) {
      mistakes.push(sortedArr[i]);
    }
  }

  console.log(mistakes);
  return mistakes.length;

};

mistakeFinder(sampleArr, range(4, 9));
