// CodeMaster has just returned from shopping.He scanned the check of the items he bought and gave the resulting string to Ratiorg to figure out the total number of purchased items.Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums up all the numbers which appear in the given input.

// Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString.

//     Example

// For inputString = "2 apples, 12 oranges", the output should be
// sumUpNumbers(inputString) = 14.

// Input / Output

// [execution time limit]4 seconds(js)

// [input] string inputString

// Guaranteed constraints:
// 6 ≤ inputString.length ≤ 60.

// [output] integer

const sumUpNumbers = inputString => {
  const matched = inputString.match(/\d+/g);

  if (!matched) {
    return 0;
  }

  let results = matched.map(Number);
  return results.reduce((a, b) => (a += b));
};

// Input:
// inputString: "2 apples, 12 oranges"

// Expected Output:
// 14
