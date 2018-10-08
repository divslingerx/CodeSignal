// Given array of integers, find the maximal possible sum of some of its k consecutive elements.

//     Example

// For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
// arrayMaxConsecutiveSum(inputArray, k) = 8.
// All possible sums of 2 consecutive elements are:

// 2 + 3 = 5;
// 3 + 5 = 8;
// 5 + 1 = 6;
// 1 + 6 = 7.
// Thus, the answer is 8.
// Input / Output

// [execution time limit]4 seconds(js)

// [input] array.integer inputArray

// Array of positive integers.

// Guaranteed constraints:
// 3 ≤ inputArray.length ≤ 105,
//     1 ≤ inputArray[i]≤ 1000.

//     [input] integer k

// An integer(not greater than the length of inputArray).

// Guaranteed constraints:
// 1 ≤ k ≤ inputArray.length.

// [output] integer

// The maximal possible sum.

function arrayMaxConsecutiveSum(inputArray, k) {
  var currentSum = 0;

  for (var i = 0; i < k; i++) {
    currentSum += inputArray[i];
  }

  var bestSum = currentSum;
  for (var i = k; i < inputArray.length; i++) {
    currentSum += inputArray[i];
    currentSum -= inputArray[i - k];
    bestSum = Math.max(bestSum, currentSum);
  }
  return bestSum;
}

// Input:
// inputArray: [2, 3, 5, 1, 6]
// k: 2

// Expected Output:
// 8
