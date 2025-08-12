// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

// Given two arrays a and b, check whether they are similar.

//     Example

// For a = [1, 2, 3] and b = [1, 2, 3], the output should be
// areSimilar(a, b) = true.

// The arrays are equal, no need to swap any elements.

// For a = [1, 2, 3] and b = [2, 1, 3], the output should be
// areSimilar(a, b) = true.

// We can obtain b from a by swapping 2 and 1 in b.

// For a = [1, 2, 2] and b = [2, 1, 1], the output should be
// areSimilar(a, b) = false.

// Any swap of any two elements either in a or in b won't make a and b equal.

// Input / Output

// [execution time limit]4 seconds(js)

// [input] array.integer a

// Array of integers.

// Guaranteed constraints:
// 3 ≤ a.length ≤ 105,
//     1 ≤ a[i]≤ 1000.

//     [input] array.integer b

// Array of integers of the same length as a.

// Guaranteed constraints:
// b.length = a.length,
//     1 ≤ b[i]≤ 1000.

//     [output] boolean

// true if a and b are similar, false otherwise.

function solution(a, b) {
    // Find indices where arrays differ
    const diffIndices = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            diffIndices.push(i);
        }
    }
    
    // If no differences, arrays are identical
    if (diffIndices.length === 0) return true;
    
    // If exactly 2 differences, check if swapping makes them equal
    if (diffIndices.length === 2) {
        const [i, j] = diffIndices;
        return a[i] === b[j] && a[j] === b[i];
    }
    
    // More than 2 differences means not similar
    return false;
}

function runTests() {
  const testCases = [
    { input: [[1, 2, 3], [1, 2, 3]], expected: true },
    { input: [[1, 2, 3], [2, 1, 3]], expected: true },
    { input: [[1, 2, 2], [2, 1, 1]], expected: false },
    { input: [[1, 1, 4], [1, 2, 3]], expected: false },
    { input: [[1, 2, 3], [1, 10, 2]], expected: false },
    { input: [[832, 998, 148, 570, 533, 561, 894, 147, 455, 279], [832, 998, 148, 570, 533, 561, 455, 147, 894, 279]], expected: true },
    { input: [[1, 4, 6, 3], [1, 3, 6, 4]], expected: true },
    { input: [[1, 2, 3, 4], [4, 3, 2, 1]], expected: false },
    { input: [[1], [1]], expected: true },
    { input: [[1], [2]], expected: false },
    { input: [[1, 2], [2, 1]], expected: true },
    { input: [[1, 2], [1, 3]], expected: false },
    { input: [[5, 5, 5], [5, 5, 5]], expected: true },
    { input: [[1, 2, 3, 4, 5], [1, 2, 3, 5, 4]], expected: true }
  ];

  console.log('Testing areSimilar...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }, index) => {
    const result = solution(input[0], input[1]);
    if (result === expected) {
      console.log(`✓ Test ${index + 1}: areSimilar(${JSON.stringify(input[0])}, ${JSON.stringify(input[1])}) => ${result}`);
      passed++;
    } else {
      console.log(`✗ Test ${index + 1}: areSimilar(${JSON.stringify(input[0])}, ${JSON.stringify(input[1])}) => Expected ${expected}, got ${result}`);
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
// a: [1, 2, 3]
// b: [1, 2, 3]

// Expected Output:
// true
