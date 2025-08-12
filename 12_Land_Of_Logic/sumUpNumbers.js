// CodeMaster has just returned from shopping.He scanned the check of the items he bought and gave the resulting string to Ratiorg to figure out the total number of purchased items.Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums up all the numbers which appear in the given input.

// Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString.

//     Example

// For inputString = "2 apples, 12 oranges", the output should be
// sumUpNumbers(inputString) = 14.

// Input / Output

// [execution time limit]4 seconds(js)

// [input] string inputString

// Guaranteed constraints:
// 6 ≤ inputString.length ≤ 60.

// [output] integer

function solution(inputString) {
    // More concise using optional chaining and nullish coalescing
    // Simpler reduce syntax
    const matched = inputString.match(/\d+/g);
    return matched?.reduce((sum, num) => sum + Number(num), 0) ?? 0;
};

function runTests() {
  const testCases = [
    { input: "2 apples, 12 oranges", expected: 14 },
    { input: "123450", expected: 123450 },
    { input: "Your payment method is invalid", expected: 0 },
    { input: "no digits here!", expected: 0 },
    { input: "1 2 3 4 5", expected: 15 },
    { input: "100 bottles of beer on the wall, 99 bottles of beer", expected: 199 },
    { input: "a1b2c3d4e5f", expected: 15 },
    { input: "The year 2023 was amazing with 365 days", expected: 2388 },
    { input: "Price: $19.99 (tax: $2.50)", expected: 170 },
    { input: "42 is the answer to everything", expected: 42 },
    { input: "0000", expected: 0 },
    { input: "1000000", expected: 1000000 }
  ];

  console.log('Testing sumUpNumbers...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }, index) => {
    const result = solution(input);
    if (result === expected) {
      console.log(`✓ Test ${index + 1}: sumUpNumbers("${input}") => ${result}`);
      passed++;
    } else {
      console.log(`✗ Test ${index + 1}: sumUpNumbers("${input}") => Expected ${expected}, got ${result}`);
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
// inputString: "2 apples, 12 oranges"

// Expected Output:
// 14
