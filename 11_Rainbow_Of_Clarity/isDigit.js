// Determine if the given character is a digit or not.

//     Example

// For symbol = '0', the output should be
// isDigit(symbol) = true;
// For symbol = '-', the output should be
// isDigit(symbol) = false.
//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] char symbol

// A character which is either a digit or not.

// [output] boolean

// true if symbol is a digit, false otherwise.

//Why a question this easy is in chapter 11 is beyond me but...

function isDigit(symbol) {
  return !isNaN(symbol);
}

// symbol: "0"

// Expected Output:
// true
