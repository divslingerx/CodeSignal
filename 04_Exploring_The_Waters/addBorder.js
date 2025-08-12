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

function solution(picture) {
  const frameWidth = picture[0].length + 2;
  const borderString = "*".repeat(frameWidth); // More efficient than padEnd

  return [borderString]
    .concat(picture.map((item) => `*${item}*`))
    .concat([borderString]);
}

function runTests() {
  const testCases = [
    { 
      input: ["abc", "ded"], 
      expected: ["*****", "*abc*", "*ded*", "*****"] 
    },
    { 
      input: ["a"], 
      expected: ["***", "*a*", "***"] 
    },
    { 
      input: ["aa", "**", "zz"], 
      expected: ["****", "*aa*", "****", "*zz*", "****"] 
    },
    { 
      input: ["abcde", "fghij", "klmno"], 
      expected: ["*******", "*abcde*", "*fghij*", "*klmno*", "*******"] 
    },
    { 
      input: ["x"], 
      expected: ["***", "*x*", "***"] 
    },
    { 
      input: ["hello", "world"], 
      expected: ["*******", "*hello*", "*world*", "*******"] 
    },
    { 
      input: [""], 
      expected: ["**", "**", "**"] 
    },
    { 
      input: ["12345", "67890", "abcde", "fghij"], 
      expected: ["*******", "*12345*", "*67890*", "*abcde*", "*fghij*", "*******"] 
    }
  ];

  console.log('Testing addBorder...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }, index) => {
    const result = solution(input);
    const isEqual = JSON.stringify(result) === JSON.stringify(expected);
    if (isEqual) {
      console.log(`✓ Test ${index + 1}: ${JSON.stringify(input)} => ${JSON.stringify(result)}`);
      passed++;
    } else {
      console.log(`✗ Test ${index + 1}: ${JSON.stringify(input)} => Expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}`);
      failed++;
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
}

if (require.main === module) {
  runTests();
}

// Input:
// picture: ["abc",
//     "ded"]

// Expected Output:
// ["*****",
//     "*abc*",
//     "*ded*",
//     "*****"]
