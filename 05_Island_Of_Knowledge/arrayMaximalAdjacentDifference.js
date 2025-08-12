// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

//     Example

// For inputArray = [2, 4, 1, 0], the output should be
// arrayMaximalAdjacentDifference(inputArray) = 3.

// Input / Output

// [execution time limit]4 seconds(js)

// [input] array.integer inputArray

// Guaranteed constraints:
// 3 ≤ inputArray.length ≤ 10,
//     -15 ≤ inputArray[i]≤ 15.

//     [output] integer

// The maximal absolute difference.

function solution(inputArray) {
    // Use reduce for cleaner, more functional approach
    return inputArray.reduce((max, curr, i) => {
        if (i === 0) return max;
        return Math.max(max, Math.abs(curr - inputArray[i - 1]));
    }, 0);
}

function runTests() {
  const testCases = [
    { input: [2, 4, 1, 0], expected: 3 },
    { input: [1, 1, 1], expected: 0 },
    { input: [1, 2, 3], expected: 1 },
    { input: [10, 11, 13], expected: 2 },
    { input: [-1, 4, 10, 3, -2], expected: 7 },
    { input: [5, 1, 2, 3, 0], expected: 4 },
    { input: [0, 5, 1, 9], expected: 8 },
    { input: [-15, -12, -8, -5], expected: 4 },
    { input: [100, 50, 25], expected: 50 },
    { input: [1, 10, 2, 8], expected: 9 },
    { input: [3, 3, 3, 3, 3], expected: 0 },
    { input: [-5, 5, -5, 5], expected: 10 },
    { input: [0, 0, 1, 0], expected: 1 }
  ];

  console.log('Testing arrayMaximalAdjacentDifference...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }, index) => {
    const result = solution(input);
    if (result === expected) {
      console.log(`✓ Test ${index + 1}: arrayMaximalAdjacentDifference(${JSON.stringify(input)}) => ${result}`);
      passed++;
    } else {
      console.log(`✗ Test ${index + 1}: arrayMaximalAdjacentDifference(${JSON.stringify(input)}) => Expected ${expected}, got ${result}`);
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
// inputArray: [2, 4, 1, 0]

// Expected Output:
// 3
