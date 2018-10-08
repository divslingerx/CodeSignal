// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

//     Example

// For

// picture = ["abc",
//     "ded"]
// the output should be

// addBorder(picture) = ["*****",
//     "*abc*",
//     "*ded*",
//     "*****"]
// Input / Output

// [execution time limit]4 seconds(js)

// [input] array.string picture

// A non - empty array of non - empty equal - length strings.

// Guaranteed constraints:
// 1 ≤ picture.length ≤ 100,
//     1 ≤ picture[i].length ≤ 100.

//     [output] array.string

// The same matrix of characters, framed with a border of asterisks of width 1.

function addBorder(picture) {
  var p = picture;
  var max = p[0].length + 2;
  var edge = "";

  for (var i = 0; i < max; i++) {
    edge += "*";
  }

  p.unshift(edge);
  p.push(edge);

  for (var i = 0; i < p.length; i++) {
    while (p[i].length < max) {
      p[i] = `*${p[i]}*`;
    }
  }
  return p;
}

// Input:
// picture: ["abc",
//     "ded"]

// Expected Output:
// ["*****",
//     "*abc*",
//     "*ded*",
//     "*****"]
