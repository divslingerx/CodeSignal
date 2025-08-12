// Given a sorted array of integers a, find an integer x from a such that the value of

// abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
// is the smallest possible(here abs denotes the absolute value).
// If there are several possible answers, output the smallest one.

//     Example

// For a = [2, 4, 7], the output should be
// absoluteValuesSumMinimization(a) = 4.

// Input / Output

// [execution time limit]4 seconds(js)

// [input] array.integer a

// A non - empty array of integers, sorted in ascending order.

// Guaranteed constraints:
// 1 ≤ a.length ≤ 200,
//     -106 ≤ a[i]≤ 106.

//     [output] integer

function solution(a) {
  // The median minimizes sum of absolute deviations
  // For even length, choose the smaller of two middle elements (per problem requirements)
  const midIndex = Math.floor((a.length - 1) / 2);
  return a[midIndex];
}

function runTests() {
  const testCases = [
    { input: [2, 4, 7], expected: 4 },
    { input: [1, 1, 3, 4], expected: 1 },
    { input: [23], expected: 23 },
    { input: [-10, -10, -10, -10, -10, -9, -9, -9, -8, -8, -7, -6, -5, -4, -3, -1, 0, 0, 0, 0], expected: -8 },
    { input: [2, 4, 6, 6, 7, 8], expected: 6 },
    { input: [-4, -1], expected: -4 },
    { input: [0, 7, 9], expected: 7 },
    { input: [-1, 3, 5, 7], expected: 3 },
    { input: [1, 2, 3, 4, 5], expected: 3 },
    { input: [10, 11, 12, 13], expected: 11 }
  ];

  console.log('Testing absoluteValuesSumMinimization...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }, index) => {
    const result = solution(input);
    if (result === expected) {
      console.log(`✓ Test ${index + 1}: absoluteValuesSumMinimization(${JSON.stringify(input)}) => ${result}`);
      passed++;
    } else {
      console.log(`✗ Test ${index + 1}: absoluteValuesSumMinimization(${JSON.stringify(input)}) => Expected ${expected}, got ${result}`);
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
// a: [2, 4, 7]
// Output:
// Run the code to see output
// Expected Output:
// 4
// Console Output:
// Empty
