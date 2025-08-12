// Given the string, check if it is a palindrome.

//     Example

// For inputString = "aabaa", the output should be
// checkPalindrome(inputString) = true;
// For inputString = "abac", the output should be
// checkPalindrome(inputString) = false;
// For inputString = "a", the output should be
// checkPalindrome(inputString) = true.
//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] string inputString

// A non - empty string consisting of lowercase characters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 105.

// [output] boolean

// true if inputString is a palindrome, false otherwise.
// [JavaScript(ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

function solution(inputString) {
  // Two-pointer approach is more efficient for large strings
  // Avoids creating new array and string copies
  let left = 0;
  let right = inputString.length - 1;
  
  while (left < right) {
    if (inputString[left] !== inputString[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}

function runTests() {
  const testCases = [
    { input: "aabaa", expected: true },
    { input: "abac", expected: false },
    { input: "a", expected: true },
    { input: "racecar", expected: true },
    { input: "hello", expected: false },
    { input: "aa", expected: true },
    { input: "ab", expected: false },
    { input: "aba", expected: true },
    { input: "abba", expected: true },
    { input: "abcba", expected: true },
    { input: "abcdef", expected: false }
  ];

  console.log('Testing checkPalindrome...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }) => {
    const result = solution(input);
    if (result === expected) {
      console.log(`✓ "${input}" => ${result}`);
      passed++;
    } else {
      console.log(`✗ "${input}" => Expected ${expected}, got ${result}`);
      failed++;
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
}

if (require.main === module) {
  runTests();
}
