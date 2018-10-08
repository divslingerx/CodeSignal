// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

// Given two arrays a and b, check whether they are similar.

//     Example

// For a = [1, 2, 3] and b = [1, 2, 3], the output should be
// areSimilar(a, b) = true.

// The arrays are equal, no need to swap any elements.

// For a = [1, 2, 3] and b = [2, 1, 3], the output should be
// areSimilar(a, b) = true.

// We can obtain b from a by swapping 2 and 1 in b.

// For a = [1, 2, 2] and b = [2, 1, 1], the output should be
// areSimilar(a, b) = false.

// Any swap of any two elements either in a or in b won't make a and b equal.

// Input / Output

// [execution time limit]4 seconds(js)

// [input] array.integer a

// Array of integers.

// Guaranteed constraints:
// 3 ≤ a.length ≤ 105,
//     1 ≤ a[i]≤ 1000.

//     [input] array.integer b

// Array of integers of the same length as a.

// Guaranteed constraints:
// b.length = a.length,
//     1 ≤ b[i]≤ 1000.

//     [output] boolean

// true if a and b are similar, false otherwise.

function areSimilar(a, b) {
  var swaps = 0,
    c = [],
    d = [];

  //check if identical
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      c.push(a[i]);
      d.push(b[i]);
    }
  }

  //if all match return true - outside of for loop for some reason
  if (c.length === 0) {
    return true;
  }

  //make sure match is possble
  for (var i = 0; i < c.length; i++) {
    if (d.indexOf(c[i]) == -1) return false;
  }

  //if theres only 2 we know they match
  if (c.length == 2) return true;

  var toFind = c[0];
  var first = d[0];
  var matchIndex = d.indexOf(c[0]);

  d[0] = c[0];
  d[matchIndex] = first;

  console.log(c);
  console.log(d);

  //start from the end because we know the first is a match
  for (var i = c.length - 1; i > 0; i--) {
    if (a[i] != d[i]) return false;
  }

  return true;
}

// Input:
// a: [1, 2, 3]
// b: [1, 2, 3]

// Expected Output:
// true
