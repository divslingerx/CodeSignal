// Given array of integers, remove each kth element from it.

//     Example

// For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be
// extractEachKth(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] array.integer inputArray

// Guaranteed constraints:
// 5 ≤ inputArray.length ≤ 15,
//     -20 ≤ inputArray[i]≤ 20.

//     [input] integer k

// Guaranteed constraints:
// 1 ≤ k ≤ 10.

// [output] array.integer

// inputArray without elements k - 1, 2k - 1, 3k - 1 etc.

function extractEachKth(inputArray, k) {
  return inputArray.filter((v, i) => (i + 1) % k !== 0);
}

function runTests() {
  const testCases = [
    { inputArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k: 3, expected: [1, 2, 4, 5, 7, 8, 10] },
    { inputArray: [1, 2, 3, 4, 5], k: 1, expected: [] },
    { inputArray: [1, 2, 3, 4, 5], k: 2, expected: [1, 3, 5] },
    { inputArray: [1, 1, 1, 1, 1], k: 5, expected: [1, 1, 1, 1] },
    { inputArray: [-1, -2, -3, -4, -5, -6], k: 2, expected: [-1, -3, -5] },
    { inputArray: [0, 1, 2, 3, 4, 5, 6, 7], k: 4, expected: [0, 1, 2, 4, 5, 6] }
  ];

  console.log('Testing extractEachKth...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ inputArray, k, expected }) => {
    const result = extractEachKth(inputArray, k);
    if (JSON.stringify(result) === JSON.stringify(expected)) {
      console.log(`✓ [${inputArray.join(', ')}], k=${k} => [${result.join(', ')}]`);
      passed++;
    } else {
      console.log(`✗ [${inputArray.join(', ')}], k=${k} => Expected [${expected.join(', ')}], got [${result.join(', ')}]`);
      failed++;
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
}

if (require.main === module) {
  runTests();
}
