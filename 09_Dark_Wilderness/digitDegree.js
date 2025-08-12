// Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

// Given an integer, find its digit degree.

//     Example

// For n = 5, the output should be
// digitDegree(n) = 0;
// For n = 100, the output should be
// digitDegree(n) = 1.
// 1 + 0 + 0 = 1.
// For n = 91, the output should be
// digitDegree(n) = 2.
// 9 + 1 = 10 -> 1 + 0 = 1.
// Input / Output

// [execution time limit]4 seconds(js)

// [input] integer n

// Guaranteed constraints:
// 5 ≤ n ≤ 109.

// [output] integer

function solution(n) {
    if (n < 10) return 0;
    
    // More efficient digit sum calculation
    let digitSum = 0;
    let temp = n;
    while (temp > 0) {
        digitSum += temp % 10;
        temp = Math.floor(temp / 10);
    }
    
    return 1 + solution(digitSum);
}

function runTests() {
  const testCases = [
    { input: 5, expected: 0 },
    { input: 100, expected: 1 },
    { input: 91, expected: 2 },
    { input: 99, expected: 2 },
    { input: 123, expected: 1 },
    { input: 999, expected: 2 },
    { input: 89, expected: 2 },
    { input: 73, expected: 2 },
    { input: 777, expected: 2 },
    { input: 25, expected: 1 },
    { input: 9999, expected: 2 },
    { input: 10, expected: 1 }
  ];

  console.log('Testing digitDegree...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }, index) => {
    const result = solution(input);
    if (result === expected) {
      console.log(`✓ Test ${index + 1}: digitDegree(${input}) => ${result}`);
      passed++;
    } else {
      console.log(`✗ Test ${index + 1}: digitDegree(${input}) => Expected ${expected}, got ${result}`);
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
// n: 5

// Expected Output:
// 0
