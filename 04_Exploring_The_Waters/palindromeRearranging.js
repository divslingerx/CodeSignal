// Given a string, find out if its characters can be rearranged to form a palindrome.

//     Example

// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] string inputString

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 50.

// [output] boolean

// true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.

function palindromeRearranging(str) {
  const letterCounts = {};
  
  // Count character frequencies
  for (const char of str) {
    letterCounts[char] = (letterCounts[char] || 0) + 1;
  }
  
  // Count characters with odd frequencies
  let oddCount = 0;
  for (const count of Object.values(letterCounts)) {
    oddCount += count % 2;
  }
  
  // For palindrome: at most one character can have odd frequency
  return oddCount <= 1;
}

function runTests() {
  const testCases = [
    { input: "aabb", expected: true },
    { input: "aaab", expected: false },
    { input: "abcabc", expected: true },
    { input: "a", expected: true },
    { input: "aa", expected: true },
    { input: "ab", expected: false },
    { input: "abc", expected: false },
    { input: "aabc", expected: false },
    { input: "aabbc", expected: true },
    { input: "racecar", expected: true },
    { input: "aabbcc", expected: true },
    { input: "aabbccd", expected: true },
    { input: "zaz", expected: true },
    { input: "abccba", expected: true },
    { input: "ivicc", expected: true },
    { input: "aabbccdd", expected: true },
    { input: "aabbccdde", expected: true }
  ];

  console.log('Testing palindromeRearranging...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }, index) => {
    const result = palindromeRearranging(input);
    if (result === expected) {
      console.log(`✓ Test ${index + 1}: palindromeRearranging("${input}") => ${result}`);
      passed++;
    } else {
      console.log(`✗ Test ${index + 1}: palindromeRearranging("${input}") => Expected ${expected}, got ${result}`);
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
// inputString: "aabb"

// Expected Output:
// true
