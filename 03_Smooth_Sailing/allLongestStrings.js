// Given an array of strings, return another array containing all of its longest strings.

//     Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] array.string inputArray

// A non - empty array.

// Guaranteed constraints:
// 1 ≤ inputArray.length ≤ 10,
//     1 ≤ inputArray[i].length ≤ 10.

//     [output] array.string

// Array of the longest strings, stored in the same order as in the inputArray.
// [JavaScript(ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

function allLongestStrings(inputArray) {
  // Remove unnecessary parentheses around the map call
  const maxLength = Math.max(...inputArray.map(el => el.length));
  return inputArray.filter(item => item.length === maxLength)
}

function runTests() {
  const testCases = [
    { input: ["aba", "aa", "ad", "vcd", "aba"], expected: ["aba", "vcd", "aba"] },
    { input: ["a"], expected: ["a"] },
    { input: ["abc", "eeee", "abcd", "dcd"], expected: ["eeee", "abcd"] },
    { input: ["a", "bb", "ccc", "dddd"], expected: ["dddd"] },
    { input: ["zz", "aa", "bb", "cc"], expected: ["zz", "aa", "bb", "cc"] },
    { input: ["", "a", "aa"], expected: ["aa"] },
    { input: ["hello", "world", "test"], expected: ["hello", "world"] },
    { input: ["x", "xx", "xxx", "x"], expected: ["xxx"] },
    { input: ["same", "same", "same"], expected: ["same", "same", "same"] },
    { input: ["abcdefghij"], expected: ["abcdefghij"] }
  ];

  console.log('Testing allLongestStrings...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }, index) => {
    const result = allLongestStrings(input);
    const isEqual = JSON.stringify(result) === JSON.stringify(expected);
    if (isEqual) {
      console.log(`✓ Test ${index + 1}: ${JSON.stringify(input)} => ${JSON.stringify(result)}`);
      passed++;
    } else {
      console.log(`✗ Test ${index + 1}: ${JSON.stringify(input)} => Expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}`);
      failed++;
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
}

if (require.main === module) {
  runTests();
}
