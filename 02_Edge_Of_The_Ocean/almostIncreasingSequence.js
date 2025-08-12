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

function runTests() {
  const testCases = [
    { input: [1, 3, 2, 1], expected: false },
    { input: [1, 3, 2], expected: true },
    { input: [1, 2, 1, 2], expected: false },
    { input: [3, 6, 5, 8, 10, 20, 15], expected: false },
    { input: [1, 1, 2, 3, 4, 4], expected: false },
    { input: [1, 4, 10, 4, 2], expected: false },
    { input: [10, 1, 2, 3, 4, 5], expected: true },
    { input: [1, 1, 1, 2, 3], expected: false },
    { input: [0, -2, 5, 6], expected: true },
    { input: [1, 2, 3, 4, 5, 3, 5, 6], expected: false },
    { input: [40, 50, 60, 10, 20, 30], expected: false },
    { input: [1, 1], expected: true },
    { input: [1, 2, 5, 3, 5], expected: true },
    { input: [1, 2, 5, 5, 5], expected: false },
    { input: [10, 1, 2, 3, 4, 5, 6, 1], expected: false },
    { input: [1, 2, 3, 4, 3, 6], expected: true },
    { input: [1, 2, 3, 4, 99, 5, 6], expected: true },
    { input: [123, -17, -5, 1, 2, 3, 12, 43, 45], expected: true },
    { input: [3, 5, 67, 98, 3], expected: true }
  ];

  console.log('Testing almostIncreasingSequence...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }) => {
    const result = almostIncreasingSequence(input);
    if (result === expected) {
      console.log(`✓ [${input.join(', ')}] => ${result}`);
      passed++;
    } else {
      console.log(`✗ [${input.join(', ')}] => Expected ${expected}, got ${result}`);
      failed++;
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
}

if (require.main === module) {
  runTests();
}
