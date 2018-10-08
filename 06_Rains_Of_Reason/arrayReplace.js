// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

//     Example

// For inputArray = [1, 2, 1], elemToReplace = 1, and substitutionElem = 3, the output should be
// arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] array.integer inputArray

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 10,
//     0 ≤ inputArray[i]≤ 10.

//     [input] integer elemToReplace

// Guaranteed constraints:
// 0 ≤ elemToReplace ≤ 10.

// [input] integer substitutionElem

// Guaranteed constraints:
// 0 ≤ substitutionElem ≤ 10.

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] == elemToReplace) {
      inputArray[i] = substitutionElem;
    }
  }
  return inputArray;
}

// inputArray: [1, 2, 1]
// elemToReplace: 1
// substitutionElem: 3
// Output:
// Run the code to see output
// Expected Output:
// [3, 2, 3]
// Console Output:
// Empty
