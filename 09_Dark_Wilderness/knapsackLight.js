// You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2.What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?

// Note that there are only two items and you can't bring more than one item of each type, i.e. you can't take two first items or two second items.

//     Example

// For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 8, the output should be
// knapsackLight(value1, weight1, value2, weight2, maxW) = 10.

// You can only carry the first item.

// For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 9, the output should be
// knapsackLight(value1, weight1, value2, weight2, maxW) = 16.

// You're strong enough to take both of the items with you.

// For value1 = 5, weight1 = 3, value2 = 7, weight2 = 4, and maxW = 6, the output should be
// knapsackLight(value1, weight1, value2, weight2, maxW) = 7.

// You can't take both items, but you can take any of them.

// Input / Output

// [execution time limit]4 seconds(js)

// [input] integer value1

// Guaranteed constraints:
// 2 ≤ value1 ≤ 20.

// [input] integer weight1

// Guaranteed constraints:
// 2 ≤ weight1 ≤ 10.

// [input] integer value2

// Guaranteed constraints:
// 2 ≤ value2 ≤ 20.

// [input] integer weight2

// Guaranteed constraints:
// 2 ≤ weight2 ≤ 10.

// [input] integer maxW

// Guaranteed constraints:
// 1 ≤ maxW ≤ 20.

// [output] integer

function solution(value1, weight1, value2, weight2, maxW) {
    // Check all possible combinations and return maximum value
    const options = [];
    
    // Option 1: Take no items
    options.push(0);
    
    // Option 2: Take only first item
    if (maxW >= weight1) {
        options.push(value1);
    }
    
    // Option 3: Take only second item
    if (maxW >= weight2) {
        options.push(value2);
    }
    
    // Option 4: Take both items
    if (maxW >= weight1 + weight2) {
        options.push(value1 + value2);
    }
    
    return Math.max(...options);
}

function runTests() {
  const testCases = [
    { input: [10, 5, 6, 4, 8], expected: 10 },
    { input: [10, 5, 6, 4, 9], expected: 16 },
    { input: [5, 3, 7, 4, 6], expected: 7 },
    { input: [2, 5, 3, 4, 5], expected: 3 },
    { input: [15, 2, 20, 3, 2], expected: 15 },
    { input: [2, 7, 11, 3, 7], expected: 11 },
    { input: [3, 6, 4, 5, 20], expected: 7 },
    { input: [5, 1, 4, 2, 6], expected: 9 },
    { input: [20, 3, 18, 4, 3], expected: 20 },
    { input: [7, 2, 11, 3, 1], expected: 0 }
  ];

  console.log('Testing knapsackLight...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }, index) => {
    const result = solution(input[0], input[1], input[2], input[3], input[4]);
    if (result === expected) {
      console.log(`✓ Test ${index + 1}: knapsackLight(${input.join(', ')}) => ${result}`);
      passed++;
    } else {
      console.log(`✗ Test ${index + 1}: knapsackLight(${input.join(', ')}) => Expected ${expected}, got ${result}`);
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
// value1: 10
// weight1: 5
// value2: 6
// weight2: 4
// maxW: 8

// Expected Output:
// 10
