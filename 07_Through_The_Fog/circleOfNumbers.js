// Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal(note that 0 and n - 1 are neighboring, too).

// Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

//     Example

// For n = 10 and firstNumber = 2, the output should be
// circleOfNumbers(n, firstNumber) = 7.

// Input / Output

// [execution time limit]4 seconds(js)

// [input] integer n

// A positive even integer.

// Guaranteed constraints:
// 4 ≤ n ≤ 20.

// [input] integer firstNumber

// Guaranteed constraints:
// 0 ≤ firstNumber ≤ n - 1.

// [output] integer

function circleOfNumbers(n, firstNumber) {
  return (n / 2 + firstNumber) % n;
}

function runTests() {
  const testCases = [
    { n: 10, firstNumber: 2, expected: 7 },
    { n: 10, firstNumber: 7, expected: 2 },
    { n: 4, firstNumber: 1, expected: 3 },
    { n: 6, firstNumber: 3, expected: 0 },
    { n: 8, firstNumber: 0, expected: 4 },
    { n: 20, firstNumber: 10, expected: 0 },
    { n: 12, firstNumber: 5, expected: 11 }
  ];

  console.log('Testing circleOfNumbers...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ n, firstNumber, expected }) => {
    const result = circleOfNumbers(n, firstNumber);
    if (result === expected) {
      console.log(`✓ n=${n}, firstNumber=${firstNumber} => ${result}`);
      passed++;
    } else {
      console.log(`✗ n=${n}, firstNumber=${firstNumber} => Expected ${expected}, got ${result}`);
      failed++;
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
}

if (require.main === module) {
  runTests();
}
