// Determine if the given character is a digit or not.

//     Example

// For symbol = '0', the output should be
// isDigit(symbol) = true;
// For symbol = '-', the output should be
// isDigit(symbol) = false.
//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] char symbol

// A character which is either a digit or not.

// [output] boolean

// true if symbol is a digit, false otherwise.

//Why a question this easy is in chapter 11 is beyond me but...

function solution(symbol) {
  return !isNaN(symbol);
}

function runTests() {
  const testCases = [
    { input: "0", expected: true },
    { input: "-", expected: false },
    { input: "5", expected: true },
    { input: "9", expected: true },
    { input: "a", expected: false },
    { input: " ", expected: true },
    { input: "1", expected: true },
    { input: "#", expected: false }
  ];

  console.log('Testing solution...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }) => {
    const result = solution(input);
    if (result === expected) {
      console.log(`✓ "${input}" => ${result}`);
      passed++;
    } else {
      console.log(`✗ "${input}" => Expected ${expected}, got ${result}`);
      failed++;
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
}

if (require.main === module) {
  runTests();
}
