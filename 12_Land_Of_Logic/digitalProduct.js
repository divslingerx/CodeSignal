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
  if (product === 0) return 10;
  if (product === 1) return 1;
  
  const digits = [];
  
  // Factor the product using digits 9 down to 2
  for (let divisor = 9; divisor > 1; divisor--) {
    while (product % divisor === 0) {
      product /= divisor;
      digits.push(divisor);
    }
  }
  
  // If product is still greater than 1, it can't be factored into single digits
  if (product > 1) return -1;
  
  // Sort digits in ascending order to get the smallest number
  digits.sort();
  
  return digits.length === 0 ? 1 : parseInt(digits.join(''));
}

function runTests() {
  const testCases = [
    { input: 12, expected: 26 },
    { input: 19, expected: -1 },
    { input: 0, expected: 10 },
    { input: 1, expected: 1 },
    { input: 24, expected: 38 },
    { input: 8, expected: 8 },
    { input: 576, expected: 889 },
    { input: 11, expected: -1 }
  ];

  console.log('Testing digitsProduct...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }) => {
    const result = digitsProduct(input);
    if (result === expected) {
      console.log(`✓ ${input} => ${result}`);
      passed++;
    } else {
      console.log(`✗ ${input} => Expected ${expected}, got ${result}`);
      failed++;
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
}

if (require.main === module) {
  runTests();
}
