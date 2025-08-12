// You are taking part in an Escape Room challenge designed specifically for programmers. In your efforts to find a clue, you've found a binary code written on the wall behind a vase, and realized that it must be an encrypted message. After some thought, your first guess is that each consecutive 8 bits of the code stand for the character with the corresponding extended ASCII code.

// Assuming that your hunch is correct, decode the message.

// Example

// For code = "010010000110010101101100011011000110111100100001", the output should be
// messageFromBinaryCode(code) = "Hello!".

// The first 8 characters of the code are 01001000, which is 72 in the binary numeral system. 72 stands for H in the ASCII-table, so the first letter is H.
// Other letters can be obtained in the same manner.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string code

// A string, the encrypted message consisting of characters '0' and '1'.

// Guaranteed constraints:
// 0 < code.length < 800.

// [output] string

// The decrypted message.
// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

function solution(code) {
 return code
    .match(/.{1,8}/g)
    .reduce((acc, elm) => acc.concat(String.fromCharCode(parseInt(elm, 2))), [])
    .join("");
};

function runTests() {
  const testCases = [
    { input: "010010000110010101101100011011000110111100100001", expected: "Hello!" },
    { input: "0100100001100101011011000110110001101111", expected: "Hello" },
    { input: "01010111011011110111001001101100011001000010000000100001", expected: "World !"},
    { input: "01000001", expected: "A" },
    { input: "0011000000110001001100100011001100110100", expected: "01234" }
  ];

  console.log('Testing solution...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }) => {
    const result = solution(input);
    if (result === expected) {
      console.log(`✓ Binary message => "${result}"`);
      passed++;
    } else {
      console.log(`✗ Binary message => Expected "${expected}", got "${result}"`);
      failed++;
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
}

if (require.main === module) {
  runTests();
}
