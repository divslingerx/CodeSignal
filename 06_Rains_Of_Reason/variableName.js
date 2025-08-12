// Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

// Check if the given string is a correct variable name.

//     Example

// For name = "var_1__Int", the output should be
// variableName(name) = true;
// For name = "qq-q", the output should be
// variableName(name) = false;
// For name = "2w2", the output should be
// variableName(name) = false.
//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] string name

// Guaranteed constraints:
// 1 ≤ name.length ≤ 10.

// [output] boolean

// true if name is a correct variable name, false otherwise.

function solution(name) {
  return /^[a-z_]\w*$/i.test(name)
}

function runTests() {
  const testCases = [
    { input: "var_1__Int", expected: true },
    { input: "qq-q", expected: false },
    { input: "2w2", expected: false },
    { input: "_name", expected: true },
    { input: "name123", expected: true },
    { input: "123name", expected: false },
    { input: "name_var", expected: true },
    { input: "name#var", expected: false }
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
