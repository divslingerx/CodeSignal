// An email address such as "John.Smith@example.com" is made up of a local part("John.Smith"), an "@" symbol, then a domain part("example.com").

// The domain name part of an email address may only consist of letters, digits, hyphens and dots.The local part, however, also allows a lot of different special characters.Here you can look at several examples of correct and incorrect email addresses.

// Given a valid email address, find its domain part.

//     Example

// For address = "prettyandsimple@example.com", the output should be
// findEmailDomain(address) = "example.com";
// For address = "<>[]:,;@"!#$ %&* +-/=?^_{}| ~.a"@example.org", the output should be
// findEmailDomain(address) = "example.org".
//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] string address

// Guaranteed constraints:
// 10 ≤ address.length ≤ 50.

// [output] string

// [JavaScript(ES6)] Syntax

function solution(address) {
    // Simply find the last @ symbol and return everything after it
    return address.substring(address.lastIndexOf("@") + 1);
}

function runTests() {
  const testCases = [
    { input: "prettyandsimple@example.com", expected: "example.com" },
    { input: "<>[]:,;@\"!#$ %&* +-/=?^_{}| ~.a\"@example.org", expected: "example.org" },
    { input: "user@domain.co.uk", expected: "domain.co.uk" },
    { input: "test.email@subdomain.example.com", expected: "subdomain.example.com" },
    { input: "a@b.c", expected: "b.c" },
    { input: "complex@address@with@many@ats@final.domain", expected: "final.domain" },
    { input: "simple@test.org", expected: "test.org" },
    { input: "user@localhost", expected: "localhost" },
    { input: "email@domain-name.com", expected: "domain-name.com" },
    { input: "name.lastname@company.co", expected: "company.co" }
  ];

  console.log('Testing findEmailDomain...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }, index) => {
    const result = solution(input);
    if (result === expected) {
      console.log(`✓ Test ${index + 1}: findEmailDomain("${input}") => "${result}"`);
      passed++;
    } else {
      console.log(`✗ Test ${index + 1}: findEmailDomain("${input}") => Expected "${expected}", got "${result}"`);
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
// address: "prettyandsimple@example.com"

// Expected Output:
// "example.com"
