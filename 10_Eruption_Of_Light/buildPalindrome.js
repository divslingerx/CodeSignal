// Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

//     Example

// For st = "abcdc", the output should be
// buildPalindrome(st) = "abcdcba".

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] string st

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 3 ≤ st.length ≤ 10.

// [output] string

function solution(st) {
  let i = 0;
  let aux;
  while (st != st.split("").reverse().join("")) {
    aux = st.split("");
    aux.splice(st.length - i, 0, st[i]);
    st = aux.join("");
    i++;
  }
  return st;
}


// Input:
// st: "abcdc"

// Expected Output:
// "abcdcba"
