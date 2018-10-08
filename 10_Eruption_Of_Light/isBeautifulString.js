// A string is said to be beautiful if b occurs in it no more times than a; c occurs in it no more times than b; etc.

// Given a string, check whether it is beautiful.

//     Example

// For inputString = "bbbaacdafe", the output should be
// isBeautifulString(inputString) = true;
// For inputString = "aabbb", the output should be
// isBeautifulString(inputString) = false;
// For inputString = "bbc", the output should be
// isBeautifulString(inputString) = false.
//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] string inputString

// A string of lowercase letters.

// Guaranteed constraints:
// 3 ≤ inputString.length ≤ 50.

// [output] boolean

function isBeautifulString(str) {
  function count(char) {
    let occurances = 0;

    for (let letter of str) {
      if (letter == char) occurances++;
    }
    return occurances;
  }

  function next(char) {
    let charCode = char.charCodeAt();
    let nextChar = String.fromCharCode(charCode + 1);
    return nextChar;
  }

  let limit = 1e9;

  for (let char = "a"; char <= "z"; char = next(char)) {
    console.log(char);
    let charCount = count(char);
    if (charCount > limit) return false;
    limit = charCount;
  }
  return true;
}

// Input:
// inputString: "bbbaacdafe"
// Output:
// Run the code to see output
// Expected Output:
// true
// Console Output:
// Empty
