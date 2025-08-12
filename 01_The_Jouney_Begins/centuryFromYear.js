// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

// Example

// For year = 1905, the output should be
// centuryFromYear(year) = 20;
// For year = 1700, the output should be
// centuryFromYear(year) = 17.
// Input / Output

// [execution time limit]4 seconds(js)

// [input] integer year

// A positive integer, designating the year.

// Guaranteed constraints:
// 1 ≤ year ≤ 2005.

// [output] integer

// The number of the century the year is in.
// [JavaScript(ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

function solution(year) {
  // Simpler one-liner using Math.ceil
  return Math.ceil(year / 100);
}

function runTests() {
  const testCases = [
    { input: 1905, expected: 20 },
    { input: 1700, expected: 17 },
    { input: 1, expected: 1 },
    { input: 100, expected: 1 },
    { input: 101, expected: 2 },
    { input: 200, expected: 2 },
    { input: 2000, expected: 20 },
    { input: 2001, expected: 21 },
    { input: 2005, expected: 21 }
  ];

  console.log('Testing centuryFromYear...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }) => {
    const result = solution(input);
    if (result === expected) {
      console.log(`✓ Year ${input} => Century ${result}`);
      passed++;
    } else {
      console.log(`✗ Year ${input} => Expected ${expected}, got ${result}`);
      failed++;
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
}

if (require.main === module) {
  runTests();
}
