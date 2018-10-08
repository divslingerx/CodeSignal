// Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

//     Example

// For n = 152, the output should be
// deleteDigit(n) = 52;
// For n = 1001, the output should be
// deleteDigit(n) = 101.
// Input / Output

// [execution time limit]4 seconds(js)

// [input] integer n

// Guaranteed constraints:
// 10 ≤ n ≤ 106.

// [output] integer

const deleteDigit = n => {
  let largest = 0;
  const arr = n.toString().split("");

  const cropArr = (arr, i) => arr.slice(i, i.length - 1);

  arr.forEach((v, index, arr) => {
    let na = [...arr];
    let arr1 = na.splice(index, 1);
    let arr2 = na;
    let val = Number.parseInt(na.join(""));

    if (val > largest) {
      largest = val;
    }
  });
  return largest;
};

// Input:
// n: 152

// Expected Output:
// 52
