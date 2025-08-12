// You have deposited a specific amount of money into your bank account.Each year your balance increases at the same growth rate.With the assumption that you don't make any additional deposits, find out how long it would take for your balance to pass a specific threshold. Of course you don't want to wait too long, so you know that the answer is not greater than 6.

// Example

// For deposit = 100, rate = 20, and threshold = 170, the output should be
// depositProfit(deposit, rate, threshold) = 3.

// Each year the amount of money in your account increases by 20 %.So throughout the years, your balance would be:

// year 0: 100;
// year 1: 120;
// year 2: 144;
// year 3: 172.8.
//     Thus, it will take 3 years for your balance to pass the threshold, so the answer is 3.

// Input / Output

// [execution time limit]4 seconds(js)

// [input] integer deposit

// The initial deposit, guaranteed to be a positive integer.

// Guaranteed constraints:
// 1 ≤ deposit ≤ 100.

// [input] integer rate

// The rate of increase.Each year the balance increases by the rate percent of the current sum.

// Guaranteed constraints:
// 1 ≤ rate ≤ 100.

// [input] integer threshold

// The target balance.

// Guaranteed constraints:
// deposit < threshold ≤ 200.

// [output] integer

// The number of years it would take to hit the threshold.

function solution(deposit, rate, threshold) {
    let years = 0;
    let currentBalance = deposit;
    
    while (currentBalance < threshold) {
        years++;
        currentBalance *= (1 + rate / 100); // More efficient calculation
    }
    
    return years;
}

function runTests() {
  const testCases = [
    { input: [100, 20, 170], expected: 3 },
    { input: [100, 1, 101], expected: 1 },
    { input: [1, 100, 64], expected: 6 },
    { input: [20, 20, 50], expected: 6 },
    { input: [50, 25, 100], expected: 4 },
    { input: [10, 10, 15], expected: 5 },
    { input: [25, 30, 100], expected: 6 },
    { input: [75, 5, 100], expected: 6 },
    { input: [1, 50, 16], expected: 7 },
    { input: [80, 100, 200], expected: 2 }
  ];

  console.log('Testing depositProfit...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }, index) => {
    const result = solution(input[0], input[1], input[2]);
    if (result === expected) {
      console.log(`✓ Test ${index + 1}: depositProfit(${input[0]}, ${input[1]}, ${input[2]}) => ${result}`);
      passed++;
    } else {
      console.log(`✗ Test ${index + 1}: depositProfit(${input[0]}, ${input[1]}, ${input[2]}) => Expected ${expected}, got ${result}`);
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
// deposit: 100
// rate: 20
// threshold: 170

// Expected Output:
// 3
