// Given a string, output its longest prefix which contains only digits.

//     Example

// For inputString = "123aa1", the output should be
// longestDigitsPrefix(inputString) = "123".

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] string inputString

// Guaranteed constraints:
// 3 ≤ inputString.length ≤ 35.

// [output] string

function longestDigitsPrefix(inputString) {
  return inputString.match(/^\d*/)[0];
}

// Input:
// inputString: "123aa1"

// Expected Output:
// "123"
