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

function solution(inputArray) {
 var max = Math.abs(inputArray[1] - inputArray[0]);
    for(var i=2; i < inputArray.length; i++) {
        if(Math.abs(inputArray[i] - inputArray[i-1]) > max) {
            max = Math.abs(inputArray[i] - inputArray[i-1]);
        }
    }
    return max
}

// Input:
// inputArray: [2, 4, 1, 0]

// Expected Output:
// 3
