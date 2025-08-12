// Call two arms equally strong if the heaviest weights they each are able to lift are equal.

// Call two people equally strong if their strongest arms are equally strong(the strongest arm can be both the right and the left), and so are their weakest arms.

// Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

//     Example

// For yourLeft = 10, yourRight = 15, friendsLeft = 15, and friendsRight = 10, the output should be
// areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
// For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 10, the output should be
// areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
// For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 9, the output should be
// areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = false.
//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] integer yourLeft

// A non - negative integer representing the heaviest weight you can lift with your left arm.

// Guaranteed constraints:
// 0 ≤ yourLeft ≤ 20.

// [input] integer yourRight

// A non - negative integer representing the heaviest weight you can lift with your right arm.

// Guaranteed constraints:
// 0 ≤ yourRight ≤ 20.

// [input] integer friendsLeft

// A non - negative integer representing the heaviest weight your friend can lift with his or her left arm.

// Guaranteed constraints:
// 0 ≤ friendsLeft ≤ 20.

// [input] integer friendsRight

// A non - negative integer representing the heaviest weight your friend can lift with his or her right arm.

// Guaranteed constraints:
// 0 ≤ friendsRight ≤ 20.

// [output] boolean

// true if you and your friend are equally strong, false otherwise.

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  return (
    Math.max(yourLeft, yourRight) === Math.max(friendsLeft, friendsRight) &&
    Math.min(yourLeft, yourRight) === Math.min(friendsLeft, friendsRight)
  );
}

function runTests() {
  const testCases = [
    { yourLeft: 10, yourRight: 15, friendsLeft: 15, friendsRight: 10, expected: true },
    { yourLeft: 15, yourRight: 10, friendsLeft: 15, friendsRight: 10, expected: true },
    { yourLeft: 15, yourRight: 10, friendsLeft: 15, friendsRight: 9, expected: false },
    { yourLeft: 10, yourRight: 10, friendsLeft: 10, friendsRight: 10, expected: true },
    { yourLeft: 0, yourRight: 20, friendsLeft: 20, friendsRight: 0, expected: true },
    { yourLeft: 5, yourRight: 10, friendsLeft: 5, friendsRight: 20, expected: false },
    { yourLeft: 1, yourRight: 2, friendsLeft: 2, friendsRight: 1, expected: true }
  ];

  console.log('Testing areEquallyStrong...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ yourLeft, yourRight, friendsLeft, friendsRight, expected }) => {
    const result = areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight);
    if (result === expected) {
      console.log(`✓ yourLeft=${yourLeft}, yourRight=${yourRight}, friendsLeft=${friendsLeft}, friendsRight=${friendsRight} => ${result}`);
      passed++;
    } else {
      console.log(`✗ yourLeft=${yourLeft}, yourRight=${yourRight}, friendsLeft=${friendsLeft}, friendsRight=${friendsRight} => Expected ${expected}, got ${result}`);
      failed++;
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
}

if (require.main === module) {
  runTests();
}
