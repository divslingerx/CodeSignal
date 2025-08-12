// Given a string, find the number of different characters in it.

//     Example

// For s = "cabca", the output should be
// differentSymbolsNaive(s) = 3.

// There are 3 different characters a, b and c.

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] string s

// A string of lowercase English letters.

// Guaranteed constraints:
// 3 ≤ s.length ≤ 1000.

// [output] integer

function differentSymbolsNaive(s) {
  return new Set(s).size;
}

function runTests() {
  const testCases = [
    { input: "cabca", expected: 3 },
    { input: "aaa", expected: 1 },
    { input: "abc", expected: 3 },
    { input: "abcdefg", expected: 7 },
    { input: "abcabc", expected: 3 },
    { input: "xyzxyz", expected: 3 },
    { input: "programming", expected: 8 }
  ];

  console.log('Testing differentSymbolsNaive...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }) => {
    const result = differentSymbolsNaive(input);
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
