// After they became famous, the CodeBots all decided to move to a new building and live together.The building is represented by a rectangular matrix of rooms.Each cell in the matrix contains an integer that represents the price of the room.Some rooms are free(their cost is 0), but that's probably because they are haunted, so all the bots are afraid of them. That is why any room that is free or is located anywhere below a free room in the same column is not considered suitable for the bots to live in.

// Help the bots calculate the total price of all the rooms that are suitable for them.

//     Example

// For
// matrix = [[0, 1, 1, 2],
//     [0, 5, 0, 0],
//     [2, 0, 3, 3]]
// the output should be
// matrixElementsSum(matrix) = 9.

// Here's the rooms matrix with unsuitable rooms marked with 'x':

// [[x, 1, 1, 2],
// [x, 5, x, x],
//     [x, x, x, x]]
// Thus, the answer is 1 + 5 + 1 + 2 = 9.

// For
// matrix = [[1, 1, 1, 0],
// [0, 5, 0, 1],
// [2, 1, 3, 10]]
// the output should be
// matrixElementsSum(matrix) = 9.

// Here's the rooms matrix with unsuitable rooms marked with 'x':

// [[1, 1, 1, x],
// [x, 5, x, x],
//     [x, 1, x, x]]
// Note that the free room in the first row make the full column unsuitable for bots.

//     Thus, the answer is 1 + 1 + 1 + 5 + 1 = 9.

// Input / Output

// [execution time limit]4 seconds(js)

// [input] array.array.integer matrix

// A 2 - dimensional array of integers representing a rectangular matrix of the building.

// Guaranteed constraints:
// 1 ≤ matrix.length ≤ 5,
//     1 ≤ matrix[i].length ≤ 5,
//         0 ≤ matrix[i][j]≤ 10.

//         [output] integer

// The total price of all the rooms that are suitable for the CodeBots to live in.
// [JavaScript(ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

function matrixElementsSum(matrix) {
  // Simpler approach: track haunted columns and sum valid rooms
  const hauntedColumns = new Set();
  let sum = 0;
  
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (!hauntedColumns.has(col)) {
        if (matrix[row][col] === 0) {
          hauntedColumns.add(col);
        } else {
          sum += matrix[row][col];
        }
      }
    }
  }
  
  return sum;
}

function runTests() {
  const testCases = [
    { 
      input: [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]], 
      expected: 9 
    },
    { 
      input: [[1, 1, 1, 0], [0, 5, 0, 1], [2, 1, 3, 10]], 
      expected: 9 
    },
    { 
      input: [[1, 1, 1], [2, 2, 2], [3, 3, 3]], 
      expected: 18 
    },
    { 
      input: [[0]], 
      expected: 0 
    },
    { 
      input: [[1, 0], [1, 5]], 
      expected: 2 
    },
    { 
      input: [[1], [5], [0], [2]], 
      expected: 6 
    },
    { 
      input: [[2, 0, 0, 0], [0, 0, 0, 0]], 
      expected: 2 
    }
  ];

  console.log('Testing matrixElementsSum...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }) => {
    const result = matrixElementsSum(input);
    if (result === expected) {
      console.log(`✓ Matrix with ${input.length} rows => ${result}`);
      passed++;
    } else {
      console.log(`✗ Matrix with ${input.length} rows => Expected ${expected}, got ${result}`);
      failed++;
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
}

if (require.main === module) {
  runTests();
}
