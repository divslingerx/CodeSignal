// Given a string, replace each its character by the next one in the English alphabet(z would be replaced by a).

//     Example

// For inputString = "crazy", the output should be
// alphabeticShift(inputString) = "dsbaz".

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] string inputString

// Non - empty string consisting of lowercase English characters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 1000.

// [output] string

// The result string after replacing all of its characters.

function alphabeticShift(input) {
  // More concise using map and ternary operator
  // Remove console.log and handle only lowercase as per constraints
  return input
    .split('')
    .map(char => char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1))
    .join('');
}

function runTests() {
  const testCases = [
    { input: "crazy", expected: "dsbaz" },
    { input: "z", expected: "a" },
    { input: "a", expected: "b" },
    { input: "abc", expected: "bcd" },
    { input: "xyz", expected: "yza" },
    { input: "hello", expected: "ifmmp" },
    { input: "world", expected: "xpsme" },
    { input: "programming", expected: "qsphsbnnjoh" },
    { input: "zebra", expected: "afcsb" },
    { input: "example", expected: "fybnqmf" }
  ];

  console.log('Testing alphabeticShift...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }, index) => {
    const result = alphabeticShift(input);
    if (result === expected) {
      console.log(`✓ Test ${index + 1}: alphabeticShift("${input}") => "${result}"`);
      passed++;
    } else {
      console.log(`✗ Test ${index + 1}: alphabeticShift("${input}") => Expected "${expected}", got "${result}"`);
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
// inputString: "crazy"
// Output:
// Run the code to see output
// Expected Output:
// "dsbaz"
// Console Output:
// Empty
