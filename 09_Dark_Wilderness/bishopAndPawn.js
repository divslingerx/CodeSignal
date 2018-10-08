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
  var x1 = bishop.charCodeAt(0);
  var y1 = bishop.charCodeAt(1);
  var x2 = pawn.charCodeAt(0);
  var y2 = pawn.charCodeAt(1);

  if (x1 + y1 == x2 + y2 || x1 - y1 == x2 - y2) {
    return true;
  }
  return false;
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
