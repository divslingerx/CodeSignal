// Given an array of equal - length strings, check if it is possible to rearrange the strings in such a way that after the rearrangement the strings at consecutive positions would differ by exactly one character.

//     Example

// For inputArray = ["aba", "bbb", "bab"], the output should be
// stringsRearrangement(inputArray) = false.

// All rearrangements don't satisfy the description condition.

// For inputArray = ["ab", "bb", "aa"], the output should be
// stringsRearrangement(inputArray) = true.

// Strings can be rearranged in the following way: "aa", "ab", "bb".
//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] array.string inputArray

// A non - empty array of strings of lowercase letters.

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 10,
//     1 ≤ inputArray[i].length ≤ 15.

//     [output] boolean

function stringsRearrangement(inputArray) {
  var bruteForce = function(depth, inputArray) {
    var swap = function(i, j) {
      tmp = inputArray[i];
      inputArray[i] = inputArray[j];
      inputArray[j] = tmp;
    };
    if (depth === inputArray.length) {
      for (var i = 0; i < inputArray.length - 1; i++) {
        var differences = 0;
        for (var j = 0; j < inputArray[i].length; j++) {
          if (inputArray[i][j] !== inputArray[i + 1][j]) {
            differences++;
          }
        }
        if (differences !== 1) {
          return false;
        }
      }
      return true;
    }
    for (var i = depth; i < inputArray.length; i++) {
      swap(depth, i);
      if (bruteForce(depth + 1, inputArray)) {
        return true;
      }
      swap(depth, i);
    }
    return false;
  };
  return bruteForce(0, inputArray);
}

// Input:
// inputArray: ["aba",
//     "bbb",
//     "bab"]
// Output:
// Run the code to see output
// Expected Output:
// false
// Console Output:
// Empty
