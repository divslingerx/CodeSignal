// You are given an array of integers.On each move you are allowed to increase exactly one of its element by one.Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

//     Example

// For inputArray = [1, 1, 1], the output should be
// arrayChange(inputArray) = 3.

// Input / Output

// [execution time limit]4 seconds(js)

// [input] array.integer inputArray

// Guaranteed constraints:
// 3 ≤ inputArray.length ≤ 105,
//     -105 ≤ inputArray[i]≤ 105.

//     [output] integer

// The minimal number of moves needed to obtain a strictly increasing sequence from inputArray.
//     It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.

function arrayChange(arr) {
  let moves = 0;
  // More efficient: calculate required moves directly instead of incrementing one by one
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] <= arr[i]) {
      const needed = arr[i] + 1;
      moves += needed - arr[i + 1];
      arr[i + 1] = needed; // Set to required value directly
    }
  }
  return moves;
}

function runTests() {
  const testCases = [
    { input: [1, 1, 1], expected: 3 },
    { input: [-1000, 0, -2, 0], expected: 5 },
    { input: [2, 1, 10, 1], expected: 12 },
    { input: [1, 2, 3, 4, 5], expected: 0 },
    { input: [3, 3, 3, 3], expected: 6 },
    { input: [1, 1, 2, 2, 3, 3], expected: 9 },
    { input: [5, 4, 3, 2, 1], expected: 20 },
    { input: [0, 0, 0, 0, 0], expected: 10 },
    { input: [-5, -4, -3, -2, -1], expected: 0 },
    { input: [10, 5, 2, 1], expected: 28 },
    { input: [1], expected: 0 },
    { input: [100, 1, 2], expected: 200 },
    { input: [-10, -5, 0, 5, 10], expected: 0 }
  ];

  console.log('Testing arrayChange...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }, index) => {
    // Make a copy since the function modifies the array
    const inputCopy = [...input];
    const result = arrayChange(inputCopy);
    if (result === expected) {
      console.log(`✓ Test ${index + 1}: arrayChange(${JSON.stringify(input)}) => ${result}`);
      passed++;
    } else {
      console.log(`✗ Test ${index + 1}: arrayChange(${JSON.stringify(input)}) => Expected ${expected}, got ${result}`);
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
// inputArray: [1, 1, 1]

// Expected Output:
// 3
