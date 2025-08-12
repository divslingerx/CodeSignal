// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// solution(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] string s1

//     A string consisting of lowercase English letters.

//     Guaranteed constraints:
//     1 ≤ s1.length < 15.

//     [input] string s2

//     A string consisting of lowercase English letters.

//     Guaranteed constraints:
//     1 ≤ s2.length < 15.

//     [output] integer


function solution(s1, s2) {
    // Use frequency maps for O(n) time complexity instead of O(n²)
    // Create frequency map for s2
    const freq2 = {};
    for (const char of s2) {
        freq2[char] = (freq2[char] || 0) + 1;
    }
    
    let count = 0;
    // For each character in s1, check if it exists in s2's frequency map
    for (const char of s1) {
        if (freq2[char] > 0) {
            count++;
            freq2[char]--; // Decrement count to handle duplicates correctly
        }
    }
    
    return count;
}

function runTests() {
  const testCases = [
    { input: ["aabcc", "adcaa"], expected: 3 },
    { input: ["abcd", "aad"], expected: 2 },
    { input: ["a", "b"], expected: 0 },
    { input: ["a", "aaa"], expected: 1 },
    { input: ["abc", "def"], expected: 0 },
    { input: ["", "abc"], expected: 0 },
    { input: ["abc", ""], expected: 0 },
    { input: ["", ""], expected: 0 },
    { input: ["abcdef", "fedcba"], expected: 6 },
    { input: ["aaa", "aa"], expected: 2 },
    { input: ["aaabbbccc", "abc"], expected: 3 },
    { input: ["zab", "baz"], expected: 3 },
    { input: ["programming", "contest"], expected: 2 },
    { input: ["hello", "world"], expected: 2 }
  ];

  console.log('Testing commonCharacterCount...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }, index) => {
    const result = solution(input[0], input[1]);
    if (result === expected) {
      console.log(`✓ Test ${index + 1}: solution("${input[0]}", "${input[1]}") => ${result}`);
      passed++;
    } else {
      console.log(`✗ Test ${index + 1}: solution("${input[0]}", "${input[1]}") => Expected ${expected}, got ${result}`);
      failed++;
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
}

if (require.main === module) {
  runTests();
}
