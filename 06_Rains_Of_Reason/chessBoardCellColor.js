// Given two cells on the standard chess board, determine whether they have the same color or not.

//     Example

// For cell1 = "A1" and cell2 = "C3", the output should be
// chessBoardCellColor(cell1, cell2) = true.

// For cell1 = "A1" and cell2 = "H3", the output should be
// chessBoardCellColor(cell1, cell2) = false.

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] string cell1

//     [input] string cell2

//     [output] boolean

// true if both cells have the same color, false otherwise.

function chessBoardCellColor(cell1, cell2) {
  // Cleaner approach: chess cell color is determined by sum of coordinates
  // If sum is even, it's one color; if odd, it's another color
  const getColor = cell => {
    const col = cell.charCodeAt(0) - 65; // A=0, B=1, etc.
    const row = parseInt(cell[1]) - 1;    // 1=0, 2=1, etc.
    return (col + row) % 2;
  };
  
  return getColor(cell1) === getColor(cell2);
}

function runTests() {
  const testCases = [
    { input: ["A1", "C3"], expected: true },
    { input: ["A1", "H3"], expected: false },
    { input: ["A1", "A2"], expected: false },
    { input: ["A1", "B2"], expected: true },
    { input: ["H8", "A1"], expected: true },
    { input: ["E4", "D5"], expected: true },
    { input: ["C2", "F5"], expected: true },
    { input: ["B1", "G6"], expected: true },
    { input: ["A8", "H1"], expected: true },
    { input: ["D4", "E5"], expected: true }
  ];

  console.log('Testing chessBoardCellColor...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }, index) => {
    const result = chessBoardCellColor(input[0], input[1]);
    if (result === expected) {
      console.log(`✓ Test ${index + 1}: chessBoardCellColor("${input[0]}", "${input[1]}") => ${result}`);
      passed++;
    } else {
      console.log(`✗ Test ${index + 1}: chessBoardCellColor("${input[0]}", "${input[1]}") => Expected ${expected}, got ${result}`);
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
// cell1: "A1"
// cell2: "C3"
// Output:
// Run the code to see output
// Expected Output:
// true
// Console Output:
// Empty
