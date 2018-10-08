// Given a sorted array of integers a, find an integer x from a such that the value of

// abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
// is the smallest possible(here abs denotes the absolute value).
// If there are several possible answers, output the smallest one.

//     Example

// For a = [2, 4, 7], the output should be
// absoluteValuesSumMinimization(a) = 4.

// Input / Output

// [execution time limit]4 seconds(js)

// [input] array.integer a

// A non - empty array of integers, sorted in ascending order.

// Guaranteed constraints:
// 1 ≤ a.length ≤ 200,
//     -106 ≤ a[i]≤ 106.

//     [output] integer

function absoluteValuesSumMinimization(a) {
  var x = a[0],
    temp = a.reduce((acc, curr) => {
      return acc + Math.abs(curr - x);
    }, 0);
  for (var i = 1; i < a.length; i++) {
    if (
      a.reduce((acc, curr) => {
        return acc + Math.abs(curr - a[i]);
      }, 0) < temp
    ) {
      temp = a.reduce((acc, curr) => {
        return acc + Math.abs(curr - a[i]);
      }, 0);
      x = a[i];
    }
  }
  return x;
}

// Input:
// a: [2, 4, 7]
// Output:
// Run the code to see output
// Expected Output:
// 4
// Console Output:
// Empty
