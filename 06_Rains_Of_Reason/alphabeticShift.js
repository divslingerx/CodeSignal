// Given a string, replace each its character by the next one in the English alphabet(z would be replaced by a).

//     Example

// For inputString = "crazy", the output should be
// alphabeticShift(inputString) = "dsbaz".

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] string inputString

// Non - empty string consisting of lowercase English characters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 1000.

// [output] string

// The result string after replacing all of its characters.

function alphabeticShift(input) {
  var arr = [];
  for (var i = 0; i < input.length; i++) {
    console.log(input.charCodeAt(i));
    if (input.charCodeAt(i) == 122 || input.charCodeAt(i) == 90) {
      arr.push(97);
    } else {
      arr.push(input.charCodeAt(i) + 1);
    }
  }

  return String.fromCharCode.apply(null, arr);
}

// Input:
// inputString: "crazy"
// Output:
// Run the code to see output
// Expected Output:
// "dsbaz"
// Console Output:
// Empty
