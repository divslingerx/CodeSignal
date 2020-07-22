// Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

// Example

// For n = 3, the output should be

// spiralNumbers(n) = [[1, 2, 3],
//                     [8, 9, 4],
//                     [7, 6, 5]]
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// Matrix size, a positive integer.

// Guaranteed constraints:
// 3 ≤ n ≤ 100.

// [output] array.array.integer

// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

function spiralNumbers(n) {
  var matrix = [...Array(n)].map((_) => []),
    x = 0,
    y = 0,
    dir = 2,
    size = n,
    c = 0;
  for (var i = 1; i <= n * n; i++) {
    matrix[y][x] = i;
    if (++c == size) {
      dir = (dir + 1) % 4;
      size -= dir % 2;
      c = 0;
    }
    if (dir % 2 == 0) x += dir > 1 ? 1 : -1;
    else y += dir > 1 ? 1 : -1;
  }
  return matrix;
}
