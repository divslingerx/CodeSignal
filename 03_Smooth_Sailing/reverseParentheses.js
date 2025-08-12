// You have a string s that consists of English letters, punctuation marks, whitespace characters, and brackets.It is guaranteed that the parentheses in s form a regular bracket sequence.

// Your task is to reverse the strings contained in each pair of matching parentheses, starting from the innermost pair.The results string should not contain any parentheses.

//     Example

// For string s = "a(bc)de", the output should be
// reverseParentheses(s) = "acbde".

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] string s

// A string consisting of English letters, punctuation marks, whitespace characters and brackets.It is guaranteed that parentheses form a regular bracket sequence.

//     Constraints:
// 5 ≤ s.length ≤ 55.

// [output] string

function solution(inputString) {
    while (inputString.includes('(')) {
        inputString = inputString.replace(/\(([^()]*)\)/, (_, str) => [...str].reverse().join(''));
    }
    return inputString;
}

function runTests() {
  const testCases = [
    { input: "a(bc)de", expected: "acbde" },
    { input: "a(bcdefghijkl(mno)p)q", expected: "apmnolkjihgfedcbq" },
    { input: "co(de(fight)s)", expected: "cosfighted" },
    { input: "(abc)d(efg)", expected: "cbadgfe" },
    { input: "abcd", expected: "abcd" },
    { input: "()", expected: "" },
    { input: "(a)", expected: "a" },
    { input: "((a))", expected: "a" }
  ];

  console.log('Testing solution...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }) => {
    const result = solution(input);
    if (result === expected) {
      console.log(`✓ "${input}" => "${result}"`);
      passed++;
    } else {
      console.log(`✗ "${input}" => Expected "${expected}", got "${result}"`);
      failed++;
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
}

if (require.main === module) {
  runTests();
}

