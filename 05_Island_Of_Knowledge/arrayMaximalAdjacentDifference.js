// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

//     Example

// For inputArray = [2, 4, 1, 0], the output should be
// arrayMaximalAdjacentDifference(inputArray) = 3.

// Input / Output

// [execution time limit]4 seconds(js)

// [input] array.integer inputArray

// Guaranteed constraints:
// 3 ≤ inputArray.length ≤ 10,
//     -15 ≤ inputArray[i]≤ 15.

//     [output] integer

// The maximal absolute difference.

function arrayMaximalAdjacentDifference(arr) {
  var diff1 = 0,
    diff2 = 0,
    max = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i];
      diff1 = arr[i] - arr[i + 1];
      diff2 = arr[i] - arr[i - 1];
    }
  }

  if (diff1 > diff2) {
    return diff1;
  }

  return diff2;
}

// Input:
// inputArray: [2, 4, 1, 0]

// Expected Output:
// 3
