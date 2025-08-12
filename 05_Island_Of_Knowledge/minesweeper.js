// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

// Example

// For

// matrix = [[true, false, false],
// [false, true, false],
// [false, false, false]]
// the output should be

// minesweeper(matrix) = [[1, 2, 1],
// [2, 1, 1],
// [1, 1, 1]]
// Check out the image below for better understanding:

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] array.array.boolean matrix

// A non - empty rectangular matrix consisting of boolean values - true if the corresponding cell contains a mine, false otherwise.

// Guaranteed constraints:
// 2 ≤ matrix.length ≤ 100,
//     2 ≤ matrix[0].length ≤ 100.

//     [output] array.array.integer

// Rectangular matrix of the same size as matrix each cell of which contains an integer equal to the number of mines in the neighboring cells.Two cells are called neighboring if they share at least one corner.

function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  // Initialize result matrix with zeros
  const result = Array(rows).fill(null).map(() => Array(cols).fill(0));

  // For each cell, count neighboring mines
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Check all 8 neighboring cells (and the cell itself)
      for (let di = -1; di <= 1; di++) {
        for (let dj = -1; dj <= 1; dj++) {
          const ni = i + di;
          const nj = j + dj;
          
          // Skip if out of bounds or it's the current cell
          if (ni < 0 || ni >= rows || nj < 0 || nj >= cols || (di === 0 && dj === 0)) {
            continue;
          }
          
          // If neighboring cell has a mine, increment count
          if (matrix[ni][nj]) {
            result[i][j]++;
          }
        }
      }
    }
  }
  
  return result;
}

function runTests() {
  const testCases = [
    { 
      input: [[true, false, false], [false, true, false], [false, false, false]], 
      expected: [[1, 2, 1], [2, 1, 1], [1, 1, 1]] 
    },
    { 
      input: [[false, false, false], [false, false, false]], 
      expected: [[0, 0, 0], [0, 0, 0]] 
    },
    { 
      input: [[true, true], [true, true]], 
      expected: [[3, 3], [3, 3]] 
    },
    { 
      input: [[true, false, true], [false, false, false], [true, false, true]], 
      expected: [[0, 2, 0], [2, 4, 2], [0, 2, 0]] 
    },
    { 
      input: [[false, true, false, true]], 
      expected: [[1, 0, 2, 0]] 
    }
  ];

  console.log('Testing minesweeper...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }, index) => {
    const result = minesweeper(input);
    const isEqual = JSON.stringify(result) === JSON.stringify(expected);
    if (isEqual) {
      console.log(`✓ Test ${index + 1}: minesweeper passed`);
      passed++;
    } else {
      console.log(`✗ Test ${index + 1}: minesweeper => Expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}`);
      failed++;
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
}

if (require.main === module) {
  runTests();
}

// Input:
// matrix: [[true, false, false],
// [false, true, false],
// [false, false, false]]

// Expected Output:
// [[1, 2, 1],
// [2, 1, 1],
// [1, 1, 1]]
