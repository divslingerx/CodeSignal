// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

//     Example

// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false.

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence[1, 2].Alternately, you can remove 2 to get the strictly increasing sequence[1, 3].

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] array.integer sequence

// Guaranteed constraints:
// 2 ≤ sequence.length ≤ 105,
//     -105 ≤ sequence[i]≤ 105.

//     [output] boolean

// Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.
// [JavaScript(ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

function almostIncreasingSequence(seq) {
  var bad = 0;
  for (var i = 0; i < seq.length; i++)
    if (seq[i] <= seq[i - 1]) {
      bad++;
      if (bad > 1) return false;
      if (seq[i] <= seq[i - 2] && seq[i + 1] <= seq[i - 1]) return false;
    }
  return true;
}
