// Ticket numbers usually consist of an even number of digits.A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.
//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] integer n

// A ticket number represented as a positive integer with an even number of digits.

// Guaranteed constraints:
// 10 ≤ n < 106.

// [output] boolean

// true if n is a lucky ticket number, false otherwise.

function solution(n) {
    const nStr = n.toString();
    // Split in half
    const midpoint = nStr.length / 2;
    const p1 = nStr.slice(0, midpoint);
    const p2 = nStr.slice(midpoint);
    
    // More efficient sum calculation using +val instead of Number(val)
    const sum = (part) => part.split("").reduce((acc, val) => acc + +val, 0);
    
    return sum(p1) === sum(p2);
}

function runTests() {
  const testCases = [
    { input: 1230, expected: true },
    { input: 239017, expected: false },
    { input: 134008, expected: true },
    { input: 10, expected: false },
    { input: 11, expected: true },
    { input: 12, expected: false },
    { input: 1111, expected: true },
    { input: 1234, expected: false },
    { input: 99, expected: true },
    { input: 1001, expected: true },
    { input: 123321, expected: true },
    { input: 123456, expected: false },
    { input: 505050, expected: false },
    { input: 999999, expected: true },
    { input: 100000, expected: false }
  ];

  console.log('Testing isLucky...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }, index) => {
    const result = solution(input);
    if (result === expected) {
      console.log(`✓ Test ${index + 1}: isLucky(${input}) => ${result}`);
      passed++;
    } else {
      console.log(`✗ Test ${index + 1}: isLucky(${input}) => Expected ${expected}, got ${result}`);
      failed++;
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
}

if (require.main === module) {
  runTests();
}
