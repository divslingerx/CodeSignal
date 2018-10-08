// Given an array of strings, return another array containing all of its longest strings.

//     Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] array.string inputArray

// A non - empty array.

// Guaranteed constraints:
// 1 ≤ inputArray.length ≤ 10,
//     1 ≤ inputArray[i].length ≤ 10.

//     [output] array.string

// Array of the longest strings, stored in the same order as in the inputArray.
// [JavaScript(ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

function allLongestStrings(inputArray) {
  var arr = [];
  inputArray.sort(function(a, b) {
    //sort array by length of word
    if (a.length < b.length) {
      return 1;
    }
  });
  var max = inputArray[0].length;
  console.log("The largest item in array is: " + max);
  inputArray.forEach(function(item) {
    if (item.length == max) {
      arr.push(item);
    }
  });
  console.log(inputArray);
  console.log(arr);
  return arr;
}
