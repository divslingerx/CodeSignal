// Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

// Example

// For product = 12, the output should be
// digitsProduct(product) = 26;
// For product = 19, the output should be
// digitsProduct(product) = -1.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer product

// Guaranteed constraints:
// 0 ≤ product ≤ 600.

// [output] integer

// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

function digitsProduct(product) {
  var answerDigits = [],
    answer = 0;
  if (!product) {
    return 10;
  }
  if (product === 1) {
    return 1;
  }
  for (var divisor = 9; divisor > 1; divisor--) {
    while (product % divisor === 0) {
      product /= divisor;
      answerDigits.push(divisor);
    }
  }
  if (product > 1) {
    return -1;
  }
  for (var i = answerDigits.length - 1; i >= 0; i--) {
    answer = answer + answerDigits[i] * Math.pow(10, i);
  }
  return answer;
}
