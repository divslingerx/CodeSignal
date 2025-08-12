// A media access control address(MAC address) is a unique identifier assigned to network interfaces for communications on the physical network segment.

// The standard(IEEE 802) format for printing MAC - 48 addresses in human - friendly form is six groups of two hexadecimal digits(0 to 9 or A to F), separated by hyphens(e.g. 01 - 23 - 45 - 67 - 89 - AB).

// Your task is to check by given string inputString whether it corresponds to MAC - 48 address or not.

//     Example

// For inputString = "00-1B-63-84-45-E6", the output should be
// isMAC48Address(inputString) = true;
// For inputString = "Z1-1B-63-84-45-E6", the output should be
// isMAC48Address(inputString) = false;
// For inputString = "not a MAC-48 address", the output should be
// isMAC48Address(inputString) = false.
//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] string inputString

// Guaranteed constraints:
// 15 ≤ inputString.length ≤ 20.

// [output] boolean

// true if inputString corresponds to MAC - 48 address naming rules, false otherwise.

const isMAC48Address = inputString => {
  const regex = RegExp(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/);
  return regex.test(inputString);
};

function runTests() {
  const testCases = [
    { input: "00-1B-63-84-45-E6", expected: true },
    { input: "Z1-1B-63-84-45-E6", expected: false },
    { input: "not a MAC-48 address", expected: false },
    { input: "FF-FF-FF-FF-FF-FF", expected: true },
    { input: "00:1B:63:84:45:E6", expected: true },
    { input: "02-03-04-05-06-07-08", expected: false },
    { input: "02-03-04-05-06", expected: false },
    { input: "G2-04-12-34-45-AB", expected: false }
  ];

  console.log('Testing isMAC48Address...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }) => {
    const result = isMAC48Address(input);
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
