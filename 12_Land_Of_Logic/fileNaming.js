// You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of (k), where k is the smallest positive integer such that the obtained name is not used yet.

// Return an array of names that will be given to the files.

// Example

// For names = ["doc", "doc", "image", "doc(1)", "doc"], the output should be
// fileNaming(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.string names

// Guaranteed constraints:
// 5 ≤ names.length ≤ 1000,
// 1 ≤ names[i].length ≤ 15.

// [output] array.string

// [JavaScript (ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

const fileNaming = (names) => {
  const used = new Set();
  
  return names.map((name) => {
    let newName = name;
    let counter = 1;
    
    // Find the next available name
    while (used.has(newName)) {
      newName = `${name}(${counter})`;
      counter++;
    }
    
    used.add(newName);
    return newName;
  });
};

function runTests() {
  const testCases = [
    { input: ["doc", "doc", "image", "doc(1)", "doc"], expected: ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"] },
    { input: ["a", "b", "cd"], expected: ["a", "b", "cd"] },
    { input: ["test", "test", "test", "test"], expected: ["test", "test(1)", "test(2)", "test(3)"] },
    { input: ["name"], expected: ["name"] },
    { input: ["file", "file(1)", "image", "file(1)", "file"], expected: ["file", "file(1)", "image", "file(1)(1)", "file(2)"] }
  ];

  console.log('Testing fileNaming...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }) => {
    const result = fileNaming(input);
    if (JSON.stringify(result) === JSON.stringify(expected)) {
      console.log(`✓ [${input.join(', ')}] => [${result.join(', ')}]`);
      passed++;
    } else {
      console.log(`✗ [${input.join(', ')}] => Expected [${expected.join(', ')}], got [${result.join(', ')}]`);
      failed++;
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
}

if (require.main === module) {
  runTests();
}
