// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

//     Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.

// 7 and 3 produce the largest product.

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] array.integer inputArray

// An array of integers containing at least two elements.

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 10,
//     -1000 ≤ inputArray[i]≤ 1000.

//     [output] integer

// The largest product of adjacent elements.
// [JavaScript(ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

function adjacentElementsProduct(inputArray) {
  // Fix: loop should go to length-1, not length
  // Use Math.max for cleaner code
  let maxProduct = inputArray[0] * inputArray[1];
  
  for (let i = 1; i < inputArray.length - 1; i++) {
    maxProduct = Math.max(maxProduct, inputArray[i] * inputArray[i + 1]);
  }
  
  return maxProduct;
}

function runTests() {
  const testCases = [
    { input: [3, 6, -2, -5, 7, 3], expected: 21 },
    { input: [1, 2, 3, 0], expected: 6 },
    { input: [-1, -2], expected: 2 },
    { input: [5, 1, 2, 3, 1, 4], expected: 6 },
    { input: [1, 0, 1, 0, 1000], expected: 0 },
    { input: [2, 3, -5, -2, 4], expected: 10 },
    { input: [-23, 4, -3, 8, -12], expected: -12 },
    { input: [1, 1, 1], expected: 1 },
    { input: [-1000, -1000], expected: 1000000 }
  ];

  console.log('Testing adjacentElementsProduct...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }) => {
    const result = adjacentElementsProduct(input);
    if (result === expected) {
      console.log(`✓ [${input}] => ${result}`);
      passed++;
    } else {
      console.log(`✗ [${input}] => Expected ${expected}, got ${result}`);
      failed++;
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
}

if (require.main === module) {
  runTests();
}
