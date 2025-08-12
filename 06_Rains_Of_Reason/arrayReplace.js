// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

//     Example

// For inputArray = [1, 2, 1], elemToReplace = 1, and substitutionElem = 3, the output should be
// arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] array.integer inputArray

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 10,
//     0 ≤ inputArray[i]≤ 10.

//     [input] integer elemToReplace

// Guaranteed constraints:
// 0 ≤ elemToReplace ≤ 10.

// [input] integer substitutionElem

// Guaranteed constraints:
// 0 ≤ substitutionElem ≤ 10.

function solution(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map(elm => elm === elemToReplace ? substitutionElem : elm)
}

function runTests() {
  const testCases = [
    { inputArray: [1, 2, 1], elemToReplace: 1, substitutionElem: 3, expected: [3, 2, 3] },
    { inputArray: [1, 2, 3, 4, 5], elemToReplace: 3, substitutionElem: 0, expected: [1, 2, 0, 4, 5] },
    { inputArray: [1, 1, 1], elemToReplace: 1, substitutionElem: 2, expected: [2, 2, 2] },
    { inputArray: [1, 2, 3], elemToReplace: 4, substitutionElem: 5, expected: [1, 2, 3] },
    { inputArray: [0, 0, 0, 0], elemToReplace: 0, substitutionElem: 10, expected: [10, 10, 10, 10] }
  ];

  console.log('Testing solution...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ inputArray, elemToReplace, substitutionElem, expected }) => {
    const result = solution(inputArray, elemToReplace, substitutionElem);
    if (JSON.stringify(result) === JSON.stringify(expected)) {
      console.log(`✓ [${inputArray.join(', ')}], replace ${elemToReplace} with ${substitutionElem} => [${result.join(', ')}]`);
      passed++;
    } else {
      console.log(`✗ [${inputArray.join(', ')}], replace ${elemToReplace} with ${substitutionElem} => Expected [${expected.join(', ')}], got [${result.join(', ')}]`);
      failed++;
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
}

if (require.main === module) {
  runTests();
}
