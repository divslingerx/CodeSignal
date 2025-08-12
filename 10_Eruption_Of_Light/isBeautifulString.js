// A string is said to be beautiful if b occurs in it no more times than a; c occurs in it no more times than b; etc.

// Given a string, check whether it is beautiful.

//     Example

// For inputString = "bbbaacdafe", the output should be
// isBeautifulString(inputString) = true;
// For inputString = "aabbb", the output should be
// isBeautifulString(inputString) = false;
// For inputString = "bbc", the output should be
// isBeautifulString(inputString) = false.
//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] string inputString

// A string of lowercase letters.

// Guaranteed constraints:
// 3 ≤ inputString.length ≤ 50.

// [output] boolean

function solution(str) {
  //string must contain an a
  if(!str.includes("a")) return false
  return [...str]
    .sort()
    .join("")
    .match(/(.)\1*/g)
    .every((e, i, a) => {
      const prev = a[i - 1];
      //first elm
      if (!prev) return true;
    
      const isAdjacentLetter = e.charCodeAt(0) - a[i - 1].charCodeAt(0) === 1
      const isCorrectLength = e.length <= prev.length;

      return isCorrectLength && isAdjacentLetter;
    });
}

function runTests() {
  const testCases = [
    { input: "bbbaacdafe", expected: true },
    { input: "aabbb", expected: false },
    { input: "bbc", expected: false },
    { input: "bbbaa", expected: false },
    { input: "abcdefghijklmnopqrstuvwxyz", expected: true },
    { input: "a", expected: true },
    { input: "abccba", expected: true },
    { input: "abc", expected: true }
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
