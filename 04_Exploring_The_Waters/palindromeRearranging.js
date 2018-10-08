// Given a string, find out if its characters can be rearranged to form a palindrome.

//     Example

// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] string inputString

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 50.

// [output] boolean

// true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.

function palindromeRearranging(str) {
  var letterCounts = {};
  var letter;
  var palindromeSum = 0;
  for (var i = 0; i < str.length; i++) {
    letter = str[i];
    letterCounts[letter] = letterCounts[letter] || 0;
    letterCounts[letter]++;
  }
  for (var letterCount in letterCounts) {
    palindromeSum += letterCounts[letterCount] % 2;
  }

  return palindromeSum < 2;
}

// Input:
// inputString: "aabb"

// Expected Output:
// true
