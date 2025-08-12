// Write a function that returns the sum of two numbers.

// Example

// For param1 = 1 and param2 = 2, the output should be
// add(param1, param2) = 3.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer param1

// Guaranteed constraints:
// -1000 ≤ param1 ≤ 1000.

// [input] integer param2

// Guaranteed constraints:
// -1000 ≤ param2 ≤ 1000.

// [output] integer

// The sum of the two inputs.
// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

function solution(param1, param2) {
  return param1 + param2;
}

function runTests() {
  const testCases = [
    { param1: 1, param2: 2, expected: 3 },
    { param1: 0, param2: 0, expected: 0 },
    { param1: -5, param2: 3, expected: -2 },
    { param1: 1000, param2: -1000, expected: 0 },
    { param1: 500, param2: 500, expected: 1000 },
    { param1: -1000, param2: -1000, expected: -2000 },
    { param1: 999, param2: 1, expected: 1000 }
  ];

  console.log('Testing solution...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ param1, param2, expected }) => {
    const result = solution(param1, param2);
    if (result === expected) {
      console.log(`✓ ${param1} + ${param2} => ${result}`);
      passed++;
    } else {
      console.log(`✗ ${param1} + ${param2} => Expected ${expected}, got ${result}`);
      failed++;
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
}

if (require.main === module) {
  runTests();
}
