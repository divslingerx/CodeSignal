// Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

//     Example

// For n = 152, the output should be
// deleteDigit(n) = 52;
// For n = 1001, the output should be
// deleteDigit(n) = 101.
// Input / Output

// [execution time limit]4 seconds(js)

// [input] integer n

// Guaranteed constraints:
// 10 ≤ n ≤ 106.

// [output] integer

const deleteDigit = n => {
  const digits = n.toString();
  let maxResult = 0;

  // Try removing each digit and keep track of the maximum result
  for (let i = 0; i < digits.length; i++) {
    const newNumber = parseInt(digits.slice(0, i) + digits.slice(i + 1));
    maxResult = Math.max(maxResult, newNumber);
  }

  return maxResult;
};

function runTests() {
  const testCases = [
    { input: 152, expected: 52 },
    { input: 1001, expected: 101 },
    { input: 10, expected: 1 },
    { input: 99, expected: 9 },
    { input: 222219, expected: 22229 },
    { input: 109, expected: 19 },
    { input: 222250, expected: 22250 }
  ];

  console.log('Testing deleteDigit...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }) => {
    const result = deleteDigit(input);
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
