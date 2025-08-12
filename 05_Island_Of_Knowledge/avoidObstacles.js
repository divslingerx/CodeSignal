// You are given an array of integers representing coordinates of obstacles situated on a straight line.

// Assume that you are jumping from the point with coordinate 0 to the right.You are allowed only to make jumps of the same length represented by some integer.

// Find the minimal length of the jump enough to avoid all the obstacles.

//     Example

// For inputArray = [5, 3, 6, 7, 9], the output should be
// avoidObstacles(inputArray) = 4.

// Check out the image below for better understanding:

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] array.integer inputArray

// Non - empty array of positive integers.

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 1000,
//     1 ≤ inputArray[i]≤ 1000.

function avoidObstacles(arr) {
    // Start from 2 as jump length 1 would hit every obstacle
    // Continue until we find a jump length that doesn't hit any obstacle
    for (let jumpLength = 2; ; jumpLength++) {
        if (arr.every(obstacle => obstacle % jumpLength !== 0)) {
            return jumpLength;
        }
    }
}

function runTests() {
  const testCases = [
    { input: [5, 3, 6, 7, 9], expected: 4 },
    { input: [2, 3], expected: 4 },
    { input: [1, 4, 10, 6, 2], expected: 7 },
    { input: [1, 1, 1], expected: 2 },
    { input: [1000], expected: 3 },
    { input: [1, 2], expected: 3 },
    { input: [2, 4, 6, 8, 10], expected: 7 },
    { input: [5, 8, 9, 13, 14], expected: 6 },
    { input: [3, 6, 9, 12], expected: 5 },
    { input: [2, 3, 4, 5, 6], expected: 7 }
  ];

  console.log('Testing avoidObstacles...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }, index) => {
    const result = avoidObstacles(input);
    if (result === expected) {
      console.log(`✓ Test ${index + 1}: avoidObstacles(${JSON.stringify(input)}) => ${result}`);
      passed++;
    } else {
      console.log(`✗ Test ${index + 1}: avoidObstacles(${JSON.stringify(input)}) => Expected ${expected}, got ${result}`);
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
// inputArray: [5, 3, 6, 7, 9]

// Expected Output:
// 4
