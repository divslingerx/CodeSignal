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
  let valid = true;
  let temp = [];

  let side;
  let slot;

  // Check wrong size
  if (grid[0].length !== grid.length) valid = false;

  // slot*slot
  slot = Math.sqrt(grid.length);

  // Verifiy horizontal
  grid.forEach((arr) => {
    valid =
      valid &&
      arr.every((val, i) => {
        return arr.indexOf(i + 1) > -1;
      });
  });

  // Verifiy vertical lines
  grid.forEach((arr, i) => {
    temp = grid.map((val) => val[i]);
    valid =
      valid &&
      arr.every((val, i) => {
        return temp.indexOf(i + 1) > -1;
      });
  });

  // Verifiy boxes
  for (let i = 0; i < slot; i++) {
    grid.forEach((val, e) => {
      side = val.slice(slot * i, slot * i + slot);
      temp = temp.concat(side);

      if ((e + 1) % slot == 0 && e > 0) {
        for (let j = 1; j <= grid.length; j++)
          if (temp.indexOf(j) < 0) valid = false;
        temp = [];
      }
    });
  }
  return valid;
}


