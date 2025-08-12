// Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

// The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it.The complete move therefore looks like the letter L.Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

//     Example

// For cell = "a1", the output should be
// chessKnight(cell) = 2.

// For cell = "c2", the output should be
// chessKnight(cell) = 6.

// Input / Output

// [execution time limit]4 seconds(js)

// [input] string cell

// String consisting of 2 letters - coordinates of the knight on an 8 × 8 chessboard in chess notation.

// [output] integer

function chessKnight(cell) {
  // Convert chess notation to coordinates (0-based)
  const x = cell.charCodeAt(0) - 97; // 'a' = 0, 'b' = 1, etc.
  const y = parseInt(cell[1]) - 1;   // '1' = 0, '2' = 1, etc.

  // All possible knight moves (L-shaped)
  const knightMoves = [
    [1, 2], [2, 1], [2, -1], [1, -2],
    [-1, -2], [-2, -1], [-2, 1], [-1, 2]
  ];

  // Count valid moves (within board boundaries)
  return knightMoves.filter(([dx, dy]) => {
    const newX = x + dx;
    const newY = y + dy;
    return newX >= 0 && newX < 8 && newY >= 0 && newY < 8;
  }).length;
}

  

function runTests() {
  const testCases = [
    { input: "a1", expected: 2 },
    { input: "c2", expected: 6 },
    { input: "d4", expected: 8 },
    { input: "a8", expected: 2 },
    { input: "h1", expected: 2 },
    { input: "h8", expected: 2 },
    { input: "e5", expected: 8 },
    { input: "b1", expected: 3 }
  ];

  console.log('Testing chessKnight...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }) => {
    const result = chessKnight(input);
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
