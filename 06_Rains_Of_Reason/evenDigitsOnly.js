// Check if all digits of the given integer are even.

//     Example

// For n = 248622, the output should be
// evenDigitsOnly(n) = true;
// For n = 642386, the output should be
// evenDigitsOnly(n) = false.
//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] integer n

// Guaranteed constraints:
// 1 ≤ n ≤ 109.

// [output] boolean

// true if all digits of n are even, false otherwise.

function evenDigitsOnly(n) {
  return /^[^13579]+$/.test(n);
}

function runTests() {
  const testCases = [
    { input: 248622, expected: true },
    { input: 642386, expected: false },
    { input: 248842, expected: true },
    { input: 1357, expected: false },
    { input: 2468, expected: true },
    { input: 1111, expected: false },
    { input: 2222, expected: true },
    { input: 0, expected: true }
  ];

  console.log('Testing evenDigitsOnly...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }) => {
    const result = evenDigitsOnly(input);
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
