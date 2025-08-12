// Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

// Example

// For n = 3, the output should be

// spiralNumbers(n) = [[1, 2, 3],
//                     [8, 9, 4],
//                     [7, 6, 5]]
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// Matrix size, a positive integer.

// Guaranteed constraints:
// 3 ≤ n ≤ 100.

// [output] array.array.integer

// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

function spiralNumbers(n) {
  var matrix = [...Array(n)].map((_) => []),
    x = 0,
    y = 0,
    dir = 2,
    size = n,
    c = 0;
  for (var i = 1; i <= n * n; i++) {
    matrix[y][x] = i;
    if (++c == size) {
      dir = (dir + 1) % 4;
      size -= dir % 2;
      c = 0;
    }
    if (dir % 2 == 0) x += dir > 1 ? 1 : -1;
    else y += dir > 1 ? 1 : -1;
  }
  return matrix;
}

function runTests() {
  const testCases = [
    { input: 3, expected: [[1, 2, 3], [8, 9, 4], [7, 6, 5]] },
    { input: 4, expected: [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]] },
    { input: 5, expected: [[1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9]] }
  ];

  console.log('Testing spiralNumbers...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }) => {
    const result = spiralNumbers(input);
    if (JSON.stringify(result) === JSON.stringify(expected)) {
      console.log(`✓ spiralNumbers(${input}) => ${input}x${input} spiral matrix`);
      passed++;
    } else {
      console.log(`✗ spiralNumbers(${input}) => Matrix mismatch`);
      failed++;
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
}

if (require.main === module) {
  runTests();
}
