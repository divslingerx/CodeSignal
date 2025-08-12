// Define a word as a sequence of consecutive English letters.Find the longest word from the given string.

//     Example

// For text = "Ready, steady, go!", the output should be
// longestWord(text) = "steady".

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] string text

// Guaranteed constraints:
// 4 ≤ text.length ≤ 50.

// [output] string

// The longest word from text.It's guaranteed that there is a unique output.

function solution(text) {
  return text.match(/[A-Za-z]+/g).sort((a, b) => {
    return b.length - a.length;
  })[0];
}

function runTests() {
  const testCases = [
    { input: "Ready, steady, go!", expected: "steady" },
    { input: "Ready[[[, steady, go!", expected: "steady" },
    { input: "a bb ccc", expected: "ccc" },
    { input: "To be or not to be", expected: "not" },
    { input: "You are the best!!!!!", expected: "best" },
    { input: "hello world", expected: "hello" },
    { input: "programming", expected: "programming" }
  ];

  console.log('Testing solution...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }) => {
    const result = solution(input);
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
