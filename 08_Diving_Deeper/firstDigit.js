// Find the leftmost digit that occurs in a given string.

//     Example

// For inputString = "var_1__Int", the output should be
// firstDigit(inputString) = '1';
// For inputString = "q2q-q", the output should be
// firstDigit(inputString) = '2';
// For inputString = "0ss", the output should be
// firstDigit(inputString) = '0'.
//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] string inputString

// A string containing at least one digit.

// Guaranteed constraints:
// 3 ≤ inputString.length ≤ 10.

// [output] char

function solution(str) {
  // More efficient: use regex to find first digit directly
  return str.match(/\d/)[0];
}

function runTests() {
  const testCases = [
    { input: "var_1__Int", expected: "1" },
    { input: "q2q-q", expected: "2" },
    { input: "0ss", expected: "0" },
    { input: "_AGC_0", expected: "0" },
    { input: "aaa9aaa", expected: "9" },
    { input: "out12side", expected: "1" },
    { input: "ab5cd", expected: "5" },
    { input: "test3ing", expected: "3" },
    { input: "4hello", expected: "4" },
    { input: "abc7def8", expected: "7" }
  ];

  console.log('Testing firstDigit...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }, index) => {
    const result = solution(input);
    if (result === expected) {
      console.log(`✓ Test ${index + 1}: firstDigit("${input}") => "${result}"`);
      passed++;
    } else {
      console.log(`✗ Test ${index + 1}: firstDigit("${input}") => Expected "${expected}", got "${result}"`);
      failed++;
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
}

if (require.main === module) {
  runTests();
}

// Input:
// inputString: "var_1__Int"

// Expected Output:
// "1"
