// Given two strings, find the number of common characters between them.

//     Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] string s1

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s1.length ≤ 15.

// [input] string s2

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s2.length ≤ 15.

// [output] integer

// [JavaScript(ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

function commonCharacterCount(s1, s2) {
  arr1 = s1.split("");
  arr2 = s2.split("");
  var common = 0;
  var largeArr = [];
  var smallArr = [];
  //double check we have the corrent order
  if (arr1.length > arr2.length) {
    largeArr = arr1;
    smallArr = arr2;
  } else {
    largeArr = arr2;
    smallArr = arr1;
  }

  largeArr.forEach(function(char) {
    for (var i = 0; i < smallArr.length; i++) {
      if (char == smallArr[i]) {
        common++;
        smallArr.splice(i, 1);
        return;
      } else if (smallArr.length == 0) {
        return;
      }
    }
  });

  console.log(smallArr);
  console.log(common);
  return common;
}
