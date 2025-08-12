// Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

//     Example

// For st = "abcdc", the output should be
// buildPalindrome(st) = "abcdcba".

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] string st

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 3 ≤ st.length ≤ 10.

// [output] string

function solution(st) {
  // More efficient approach: find how many characters we need to add
  const isPalindrome = str => str === str.split("").reverse().join("");
  
  if (isPalindrome(st)) return st;
  
  // Try adding characters from the beginning to the end
  for (let i = 0; i < st.length; i++) {
    const candidate = st + st.slice(0, i + 1).split("").reverse().join("");
    if (isPalindrome(candidate)) {
      return candidate;
    }
  }
  
  return st;
}

function runTests() {
  const testCases = [
    { input: "abcdc", expected: "abcdcba" },
    { input: "ababab", expected: "abababa" },
    { input: "abaa", expected: "abaaba" },
    { input: "abc", expected: "abcba" },
    { input: "aba", expected: "aba" },
    { input: "ab", expected: "aba" },
    { input: "aa", expected: "aa" },
    { input: "abcd", expected: "abcdcba" },
    { input: "race", expected: "racecar" },
    { input: "level", expected: "level" }
  ];

  console.log('Testing buildPalindrome...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }, index) => {
    const result = solution(input);
    if (result === expected) {
      console.log(`✓ Test ${index + 1}: buildPalindrome("${input}") => "${result}"`);
      passed++;
    } else {
      console.log(`✗ Test ${index + 1}: buildPalindrome("${input}") => Expected "${expected}", got "${result}"`);
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
// st: "abcdc"

// Expected Output:
// "abcdcba"
