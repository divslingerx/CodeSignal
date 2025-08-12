// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

// This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

// Example

// For
// grid = [[1, 3, 2, 5, 4, 6, 9, 8, 7],
//         [4, 6, 5, 8, 7, 9, 3, 2, 1],
//         [7, 9, 8, 2, 1, 3, 6, 5, 4],
//         [9, 2, 1, 4, 3, 5, 8, 7, 6],
//         [3, 5, 4, 7, 6, 8, 2, 1, 9],
//         [6, 8, 7, 1, 9, 2, 5, 4, 3],
//         [5, 7, 6, 9, 8, 1, 4, 3, 2],
//         [2, 4, 3, 6, 5, 7, 1, 9, 8],
//         [8, 1, 9, 3, 2, 4, 7, 6, 5]]
// the output should be
// sudoku(grid) = true;

// For
// grid = [[1, 3, 2, 5, 4, 6, 9, 2, 7],
//         [4, 6, 5, 8, 7, 9, 3, 8, 1],
//         [7, 9, 8, 2, 1, 3, 6, 5, 4],
//         [9, 2, 1, 4, 3, 5, 8, 7, 6],
//         [3, 5, 4, 7, 6, 8, 2, 1, 9],
//         [6, 8, 7, 1, 9, 2, 5, 4, 3],
//         [5, 7, 6, 9, 8, 1, 4, 3, 2],
//         [2, 4, 3, 6, 5, 7, 1, 9, 8],
//         [8, 1, 9, 3, 2, 4, 7, 6, 5]]
// the output should be
// sudoku(grid) = false.

// The output should be false: each of the nine 3 × 3 sub-grids should contain all of the digits from 1 to 9.
// These examples are represented on the image below.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.array.integer grid

// A matrix representing 9 × 9 grid already filled with numbers from 1 to 9.

// Guaranteed constraints:
// grid.length = 9,
// grid[i].length = 9,
// 1 ≤ grid[i][j] ≤ 9.

// [output] boolean

// true if the given grid represents a correct solution to Sudoku, false otherwise.
// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

function solution(grid) {
  // More efficient approach using Set for O(1) lookups instead of indexOf O(n)
  // Early return on failures instead of continuing checks
  
  const n = 9;
  
  // Check rows
  for (let row of grid) {
    if (new Set(row).size !== n) return false;
  }
  
  // Check columns
  for (let col = 0; col < n; col++) {
    const column = new Set();
    for (let row = 0; row < n; row++) {
      column.add(grid[row][col]);
    }
    if (column.size !== n) return false;
  }
  
  // Check 3x3 boxes
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      const box = new Set();
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          box.add(grid[boxRow * 3 + i][boxCol * 3 + j]);
        }
      }
      if (box.size !== n) return false;
    }
  }
  
  return true;
}

function runTests() {
  const validGrid = [
    [1, 3, 2, 5, 4, 6, 9, 8, 7],
    [4, 6, 5, 8, 7, 9, 3, 2, 1],
    [7, 9, 8, 2, 1, 3, 6, 5, 4],
    [9, 2, 1, 4, 3, 5, 8, 7, 6],
    [3, 5, 4, 7, 6, 8, 2, 1, 9],
    [6, 8, 7, 1, 9, 2, 5, 4, 3],
    [5, 7, 6, 9, 8, 1, 4, 3, 2],
    [2, 4, 3, 6, 5, 7, 1, 9, 8],
    [8, 1, 9, 3, 2, 4, 7, 6, 5]
  ];
  
  const invalidGrid = [
    [1, 3, 2, 5, 4, 6, 9, 2, 7],
    [4, 6, 5, 8, 7, 9, 3, 8, 1],
    [7, 9, 8, 2, 1, 3, 6, 5, 4],
    [9, 2, 1, 4, 3, 5, 8, 7, 6],
    [3, 5, 4, 7, 6, 8, 2, 1, 9],
    [6, 8, 7, 1, 9, 2, 5, 4, 3],
    [5, 7, 6, 9, 8, 1, 4, 3, 2],
    [2, 4, 3, 6, 5, 7, 1, 9, 8],
    [8, 1, 9, 3, 2, 4, 7, 6, 5]
  ];
  
  const duplicateRowGrid = [
    [1, 1, 2, 5, 4, 6, 9, 8, 7],
    [4, 6, 5, 8, 7, 9, 3, 2, 1],
    [7, 9, 8, 2, 1, 3, 6, 5, 4],
    [9, 2, 1, 4, 3, 5, 8, 7, 6],
    [3, 5, 4, 7, 6, 8, 2, 1, 9],
    [6, 8, 7, 1, 9, 2, 5, 4, 3],
    [5, 7, 6, 9, 8, 1, 4, 3, 2],
    [2, 4, 3, 6, 5, 7, 1, 9, 8],
    [8, 3, 9, 3, 2, 4, 7, 6, 5]
  ];
  
  const testCases = [
    { input: validGrid, expected: true },
    { input: invalidGrid, expected: false },
    { input: duplicateRowGrid, expected: false }
  ];

  console.log('Testing sudoku...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }, index) => {
    const result = solution(input);
    if (result === expected) {
      console.log(`✓ Test ${index + 1}: sudoku => ${result} (${expected ? 'valid' : 'invalid'} grid)`);
      passed++;
    } else {
      console.log(`✗ Test ${index + 1}: sudoku => Expected ${expected}, got ${result}`);
      failed++;
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
}

if (require.main === module) {
  runTests();
}


