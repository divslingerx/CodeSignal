// Given a string, return its encoding defined as follows:

// First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
// for example, "aabbbc" is divided into["aa", "bbb", "c"]
// Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
// for example, substring "bbb" is replaced by "3b"
// Finally, all the new strings are concatenated together in the same order and a new string is returned.
//     Example

// For s = "aabbbc", the output should be
// lineEncoding(s) = "2a3bc".

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] string s

// String consisting of lowercase English letters.

// Guaranteed constraints:
// 4 ≤ s.length ≤ 15.

// [output] string

// Encoded version of s.

function lineEncoding(s) {
  // Use regex to find consecutive identical characters
  return s.replace(/(.)\1+/g, (match, char) => match.length + char);
}

function runTests() {
  const testCases = [
    { input: "aabbbc", expected: "2a3bc" },
    { input: "abbcabb", expected: "a2bca2b" },
    { input: "abcd", expected: "abcd" },
    { input: "aaaa", expected: "4a" },
    { input: "aabcc", expected: "2ab2c" },
    { input: "wwwwwwwww", expected: "9w" },
    { input: "bccccccccc", expected: "b9c" }
  ];

  console.log('Testing lineEncoding...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }) => {
    const result = lineEncoding(input);
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
