// Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

// Example

// For

// matrix = [[1, 2, 1],
//           [2, 2, 2],
//           [2, 2, 2],
//           [1, 2, 3],
//           [2, 2, 1]]
// the output should be
// differentSquares(matrix) = 6.

// Here are all 6 different 2 × 2 squares:

// 1 2
// 2 2
// 2 1
// 2 2
// 2 2
// 2 2
// 2 2
// 1 2
// 2 2
// 2 3
// 2 3
// 2 1
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.array.integer matrix

// Guaranteed constraints:
// 1 ≤ matrix.length ≤ 100,
// 1 ≤ matrix[i].length ≤ 100,
// 0 ≤ matrix[i][j] ≤ 9.

// [output] integer

// The number of different 2 × 2 squares in matrix.
// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }





function solution(matrix) {
    // Current approach is already efficient using Set for uniqueness
    // Small optimization: use template literals for better readability
    const squares = new Set();
    
    for(let i = 0; i < matrix.length - 1; i++){
        for(let j = 0; j < matrix[0].length - 1; j++){
            // Using template literal is cleaner, though performance is similar
            squares.add(`${matrix[i][j]}${matrix[i+1][j]}${matrix[i][j+1]}${matrix[i+1][j+1]}`);
        }
    }
    
    return squares.size;
}

function runTests() {
  const testCases = [
    { 
      input: [[1, 2, 1], [2, 2, 2], [2, 2, 2], [1, 2, 3], [2, 2, 1]], 
      expected: 6 
    },
    { 
      input: [[9, 9, 9, 9, 9], [9, 9, 9, 9, 9], [9, 9, 9, 9, 9], [9, 9, 9, 9, 9]], 
      expected: 1 
    },
    { 
      input: [[3]], 
      expected: 0 
    },
    { 
      input: [[1, 2], [3, 4]], 
      expected: 1 
    },
    { 
      input: [[1, 1, 1], [1, 1, 1], [1, 1, 1]], 
      expected: 1 
    },
    { 
      input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]], 
      expected: 4 
    },
    { 
      input: [[0, 1], [1, 0]], 
      expected: 1 
    },
    { 
      input: [[5, 5, 5, 6], [5, 5, 5, 6], [6, 6, 6, 5], [6, 6, 6, 5]], 
      expected: 6 
    }
  ];

  console.log('Testing differentSquares...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }, index) => {
    const result = solution(input);
    if (result === expected) {
      console.log(`✓ Test ${index + 1}: differentSquares passed`);
      passed++;
    } else {
      console.log(`✗ Test ${index + 1}: differentSquares => Expected ${expected}, got ${result}`);
      failed++;
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
}

if (require.main === module) {
  runTests();
}
