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

matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]];

function matrixElementsSum(matrix) {
  // Calculate the width and height of the Array
  var w = matrix.length || 0;
  var h = matrix[0] instanceof Array ? matrix[0].length : 0;
  // In case it is a zero matrix return empty array.
  if (h === 0 || w === 0) {
    return [];
  }

  var i,
    j,
    t = [];
  // Loop through every item in the outer array (height)
  for (i = 0; i < h; i++) {
    // Insert a new row (array)
    t[i] = [];
    // Loop through every item per item in outer array (width)
    for (j = 0; j < w; j++) {
      // Save transposed martix.
      t[i][j] = matrix[j][i];
    }
  }

  // now that we have our floors as columns if we come across a 0 the rest of the rooms are will be zero and thus dont need to be there
  for (var i = 0; i < t.length; i++) {
    var index = t[i].indexOf(0);
    if (index != -1) {
      t[i].length = index;
    }
  }

  //concat multi array to single array
  var merged = [].concat.apply([], t);

  // get sum of flattened array
  return merged.reduce((acc, val) => acc + val, 0);
}

matrixElementsSum(matrix);
