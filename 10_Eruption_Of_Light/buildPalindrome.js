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

function buildPalindrome(st) {
  i = 0;
  if (
    st !=
    st
      .split("")
      .reverse()
      .join("")
  ) {
    st += "!";
  }
  while (
    st.slice(0, -1) !=
    st
      .split("")
      .reverse()
      .join("")
      .slice(1)
  ) {
    st = st.slice(0, -i - 1) + st[i] + st.slice(-i - 1);
    i++;
  }
  return st.slice(0, -1);
}

// Input:
// st: "abcdc"

// Expected Output:
// "abcdcba"
