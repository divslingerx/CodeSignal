// Given an array of equal - length strings, check if it is possible to rearrange the strings in such a way that after the rearrangement the strings at consecutive positions would differ by exactly one character.

//     Example

// For inputArray = ["aba", "bbb", "bab"], the output should be
// stringsRearrangement(inputArray) = false.

// All rearrangements don't satisfy the description condition.

// For inputArray = ["ab", "bb", "aa"], the output should be
// stringsRearrangement(inputArray) = true.

// Strings can be rearranged in the following way: "aa", "ab", "bb".
//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] array.string inputArray

// A non - empty array of strings of lowercase letters.

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 10,
//     1 ≤ inputArray[i].length ≤ 15.

//     [output] boolean

function stringsRearrangement(inputArray) {
  // Helper function to check if two strings differ by exactly one character
  const differByOne = (str1, str2) => {
    let differences = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        differences++;
        if (differences > 1) return false; // Early exit for efficiency
      }
    }
    return differences === 1;
  };

  // Helper function to generate all permutations
  const permute = (depth, arr) => {
    const swap = (i, j) => {
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Modern destructuring swap
    };

    if (depth === arr.length) {
      // Check if current permutation is valid
      for (let i = 0; i < arr.length - 1; i++) {
        if (!differByOne(arr[i], arr[i + 1])) {
          return false;
        }
      }
      return true;
    }

    for (let i = depth; i < arr.length; i++) {
      swap(depth, i);
      if (permute(depth + 1, arr)) {
        return true;
      }
      swap(depth, i); // Backtrack
    }
    return false;
  };

  return permute(0, [...inputArray]); // Work with copy to avoid modifying original
}

function runTests() {
  const testCases = [
    { input: ["aba", "bbb", "bab"], expected: false },
    { input: ["ab", "bb", "aa"], expected: true },
    { input: ["q", "q"], expected: false },
    { input: ["zzzzab", "zzzzbb", "zzzzaa"], expected: true },
    { input: ["ab", "ad", "ef", "eg"], expected: false },
    { input: ["abc", "bbc", "bbd", "abd"], expected: true },
    { input: ["f", "g", "a"], expected: true },
    { input: ["abc", "abx", "axx", "abc"], expected: false },
    { input: ["abc", "bbc"], expected: true }
  ];

  console.log('Testing stringsRearrangement...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }, index) => {
    const result = stringsRearrangement(input);
    if (result === expected) {
      console.log(`✓ Test ${index + 1}: stringsRearrangement(${JSON.stringify(input)}) => ${result}`);
      passed++;
    } else {
      console.log(`✗ Test ${index + 1}: stringsRearrangement(${JSON.stringify(input)}) => Expected ${expected}, got ${result}`);
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
// inputArray: ["aba",
//     "bbb",
//     "bab"]
// Output:
// Run the code to see output
// Expected Output:
// false
// Console Output:
// Empty
