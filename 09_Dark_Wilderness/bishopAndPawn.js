// Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

// The bishop has no restrictions in distance for each move, but is limited to diagonal movement.Check out the example below to see how it can move:

// Example

// For bishop = "a1" and pawn = "c3", the output should be
// bishopAndPawn(bishop, pawn) = true.

// For bishop = "h1" and pawn = "h3", the output should be
// bishopAndPawn(bishop, pawn) = false.

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] string bishop

// Coordinates of the white bishop in the chess notation.

// [input] string pawn

// Coordinates of the black pawn in the same notation.

// [output] boolean

// true if the bishop can capture the pawn, false otherwise.

function bishopAndPawn(bishop, pawn) {
  const x1 = bishop.charCodeAt(0);
  const y1 = bishop.charCodeAt(1);
  const x2 = pawn.charCodeAt(0);
  const y2 = pawn.charCodeAt(1);

  // Bishop moves diagonally: positions are on same diagonal if
  // sum or difference of coordinates are equal
  return (x1 + y1 === x2 + y2) || (x1 - y1 === x2 - y2);
}

function runTests() {
  const testCases = [
    { input: ["a1", "c3"], expected: true },
    { input: ["h1", "h3"], expected: false },
    { input: ["a5", "c3"], expected: true },
    { input: ["g1", "f2"], expected: true },
    { input: ["e7", "d6"], expected: true },
    { input: ["e7", "a3"], expected: true },
    { input: ["d5", "e4"], expected: true },
    { input: ["a1", "a2"], expected: false },
    { input: ["h8", "a1"], expected: true },
    { input: ["c4", "d5"], expected: true },
    { input: ["b2", "c4"], expected: false },
    { input: ["f6", "e7"], expected: true }
  ];

  console.log('Testing bishopAndPawn...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }, index) => {
    const result = bishopAndPawn(input[0], input[1]);
    if (result === expected) {
      console.log(`✓ Test ${index + 1}: bishopAndPawn("${input[0]}", "${input[1]}") => ${result}`);
      passed++;
    } else {
      console.log(`✗ Test ${index + 1}: bishopAndPawn("${input[0]}", "${input[1]}") => Expected ${expected}, got ${result}`);
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
// bishop: "a1"
// pawn: "c3"
// Output:
// Run the code to see output
// Expected Output:
// true
// Console Output:
// Empty
