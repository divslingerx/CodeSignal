// Given a string, return its encoding defined as follows:

// First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
// for example, "aabbbc" is divided into["aa", "bbb", "c"]
// Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
// for example, substring "bbb" is replaced by "3b"
// Finally, all the new strings are concatenated together in the same order and a new string is returned.
//     Example

// For s = "aabbbc", the output should be
// lineEncoding(s) = "2a3bc".

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] string s

// String consisting of lowercase English letters.

// Guaranteed constraints:
// 4 ≤ s.length ≤ 15.

// [output] string

// Encoded version of s.

function lineEncoding(s) {
  let arr = [];
  let letArr = [];
  let last = "";
  let encoded = "";

  s.split("").forEach((letter, i) => {
    if (!letArr.length || letter === letArr[letArr.length - 1])
      letArr.push(letter);

    if (letter !== letArr[letArr.length - 1]) {
      arr.push(letArr);
      letArr = [letter];
    }

    //if last letter
    if (i == s.length - 1) arr.push(letArr);
  });

  arr.forEach((acc, index) => {
    const letter = acc[0];
    const length = arr[index].length;


    if (length > 1) {
      encoded += `${length}${letter}`;
    } else {
      encoded += `${letter}`;
    }
  });

  return encoded;
}

// Input:
// s: "aabbbc"

// Expected Output:
// "2a3bc"
