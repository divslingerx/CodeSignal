// Below we will define an n - interesting polygon.Your task is to find the area of a polygon for a given n.

//     A 1 - interesting polygon is just a square with a side of length 1. An n - interesting polygon is obtained by taking the n - 1 - interesting polygon and appending 1 - interesting polygons to its rim, side by side.You can see the 1 -, 2 -, 3 - and 4 - interesting polygons in the picture below.

//         Example
//https://codefightsuserpics.s3.amazonaws.com/tasks/shapeArea/img/area.png?_tm=1530813671805
// For n = 2, the output should be
// shapeArea(n) = 5;
// For n = 3, the output should be
// shapeArea(n) = 13.
// Input / Output

// [execution time limit]4 seconds(js)

// [input] integer n

// Guaranteed constraints:
// 1 ≤ n < 104.

// [output] integer

// The area of the n - interesting polygon.
// [JavaScript(ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

function shapeArea(n) {
  return 1 + 2 * n * (n - 1);
}
