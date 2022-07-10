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
  const xLookup = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  };

  const x = xLookup[cell[0]];
  const y = Number(cell[1]);

  const possibleMoves = [
    [x + 1, y + 2],
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x + 1, y - 2],
    [x - 1, y - 2],
    [x - 2, y - 1],
    [x - 2, y + 1],
    [x - 1, y + 2],
  ];

  const checkX = (x) => {
    return x > 0 && x <= 8;
  };

  const checkY = (y) => {
    return y > 0 && y <= 8;
  };

  return possibleMoves.filter((move) => {
    const [x, y] = move;
    if (checkX(x) && checkY(y)) return true;
  }).length;
}

  

// Input:
// cell: "a1"

// Expected Output:
// 2
