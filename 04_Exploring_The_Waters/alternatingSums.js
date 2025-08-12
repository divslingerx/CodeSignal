// Several people are standing in a row and need to be divided into two teams.The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

// You are given an array of positive integers - the weights of the people.Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

//     Example

// For a = [50, 60, 60, 45, 70], the output should be
// alternatingSums(a) = [180, 105].

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] array.integer a

// Guaranteed constraints:
// 1 ≤ a.length ≤ 105,
//     45 ≤ a[i]≤ 100.

//     [output] array.integer


function solution(a) {
  return a.reduce(
    (acc, curr, idx) => {
      idx % 2 === 0 ? (acc[0] += curr) : (acc[1] += curr);
      return acc;
    },
    [0, 0]
  );
}

function runTests() {
  const testCases = [
    { input: [50, 60, 60, 45, 70], expected: [180, 105] },
    { input: [100], expected: [100, 0] },
    { input: [80], expected: [80, 0] },
    { input: [100, 50], expected: [100, 50] },
    { input: [100, 50, 50, 100], expected: [150, 150] },
    { input: [100, 51, 50, 100], expected: [150, 151] }
  ];

  console.log('Testing solution...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }) => {
    const result = solution(input);
    if (JSON.stringify(result) === JSON.stringify(expected)) {
      console.log(`✓ [${input.join(', ')}] => [${result.join(', ')}]`);
      passed++;
    } else {
      console.log(`✗ [${input.join(', ')}] => Expected [${expected.join(', ')}], got [${result.join(', ')}]`);
      failed++;
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
}

if (require.main === module) {
  runTests();
}
