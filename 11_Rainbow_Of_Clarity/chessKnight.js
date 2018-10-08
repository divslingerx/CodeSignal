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
  let code = c => c.charCodeAt(0);

  let [i, j] = cell.split("").map(c => code(c));
  let isGoodRow = i => i >= code("a") && i <= code("h");
  let isGoodCol = j => j >= code("1") && j <= code("8");

  let count = 0;
  [i - 2, i + 2].forEach(i => {
    count += [j - 1, j + 1].filter(j => isGoodRow(i) && isGoodCol(j)).length;
  });
  [j - 2, j + 2].forEach(j => {
    count += [i - 1, i + 1].filter(i => isGoodRow(i) && isGoodCol(j)).length;
  });
  return count;
}

// Input:
// cell: "a1"

// Expected Output:
// 2
