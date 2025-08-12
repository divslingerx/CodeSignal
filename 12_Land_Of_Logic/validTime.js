// Check if the given string is a correct time representation of the 24 - hour clock.

//     Example

// For time = "13:58", the output should be
// validTime(time) = true;
// For time = "25:51", the output should be
// validTime(time) = false;
// For time = "02:76", the output should be
// validTime(time) = false.
//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] string time

// A string representing time in HH: MM format.It is guaranteed that the first two characters, as well as the last two characters, are digits.

// [output] boolean

// true if the given representation is correct, false otherwise.

function validTime(time) {
  const [hr, min] = time.split(/:/);
  const isBetween = (num, min, max) => num >= min && num <= max

  return isBetween(hr, 0, 23) && isBetween(min, 0, 59);
}

function runTests() {
  const testCases = [
    { input: "13:58", expected: true },
    { input: "25:51", expected: false },
    { input: "02:76", expected: false },
    { input: "00:00", expected: true },
    { input: "23:59", expected: true },
    { input: "24:00", expected: false },
    { input: "12:60", expected: false },
    { input: "06:30", expected: true }
  ];

  console.log('Testing validTime...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }) => {
    const result = validTime(input);
    if (result === expected) {
      console.log(`✓ "${input}" => ${result}`);
      passed++;
    } else {
      console.log(`✗ "${input}" => Expected ${expected}, got ${result}`);
      failed++;
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
}

if (require.main === module) {
  runTests();
}
