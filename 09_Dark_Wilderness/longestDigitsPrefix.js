// Given a string, output its longest prefix which contains only digits.

//     Example

// For inputString = "123aa1", the output should be
// longestDigitsPrefix(inputString) = "123".

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] string inputString

// Guaranteed constraints:
// 3 ≤ inputString.length ≤ 35.

// [output] string

function longestDigitsPrefix(inputString) {
  return inputString.match(/^\d*/)[0];
}

function runTests() {
  const testCases = [
    { input: "123aa1", expected: "123" },
    { input: "0123456789", expected: "0123456789" },
    { input: "  3", expected: "" },
    { input: "1234567890abcdefghijklmnopqrstuvwxyz", expected: "1234567890" },
    { input: "abc", expected: "" },
    { input: "1111111111111111111111", expected: "1111111111111111111111" },
    { input: "0987654321", expected: "0987654321" }
  ];

  console.log('Testing longestDigitsPrefix...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }) => {
    const result = longestDigitsPrefix(input);
    if (result === expected) {
      console.log(`✓ "${input}" => "${result}"`);
      passed++;
    } else {
      console.log(`✗ "${input}" => Expected "${expected}", got "${result}"`);
      failed++;
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
}

if (require.main === module) {
  runTests();
}
