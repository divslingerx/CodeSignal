// Each day a plant is growing by upSpeed meters.Each night that plant's height decreases by downSpeed meters due to the lack of sun heat. Initially, plant is 0 meters tall. We plant the seed at the beginning of a day. We want to know when the height of the plant will reach a certain level.

// Example

// For upSpeed = 100, downSpeed = 10, and desiredHeight = 910, the output should be
// growingPlant(upSpeed, downSpeed, desiredHeight) = 10.

// Input / Output

// [execution time limit]4 seconds(js)

// [input] integer upSpeed

// A positive integer representing the daily growth.

// Guaranteed constraints:
// 3 ≤ upSpeed ≤ 100.

// [input] integer downSpeed

// A positive integer representing the nightly decline.

// Guaranteed constraints:
// 2 ≤ downSpeed < upSpeed.

// [input] integer desiredHeight

// A positive integer representing the threshold.

// Guaranteed constraints:
// 4 ≤ desiredHeight ≤ 1000.

// [output] integer

// The number of days that it will take for the plant to reach / pass desiredHeight(including the last day in the total count).

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  // Mathematical approach: calculate days needed more efficiently
  // On the last day, plant doesn't shrink, so we need to account for this
  if (desiredHeight <= upSpeed) {
    return 1; // Can reach in first day
  }
  
  const netDailyGrowth = upSpeed - downSpeed;
  const heightNeededBeforeLastDay = desiredHeight - upSpeed;
  
  return Math.ceil(heightNeededBeforeLastDay / netDailyGrowth) + 1;
}

function runTests() {
  const testCases = [
    { input: [100, 10, 910], expected: 10 },
    { input: [10, 9, 4], expected: 1 },
    { input: [5, 2, 7], expected: 2 },
    { input: [7, 3, 43], expected: 10 },
    { input: [6, 5, 10], expected: 5 },
    { input: [100, 10, 910], expected: 10 },
    { input: [100, 99, 200], expected: 101 },
    { input: [4, 1, 15], expected: 5 },
    { input: [9, 8, 45], expected: 37 },
    { input: [20, 5, 85], expected: 6 }
  ];

  console.log('Testing growingPlant...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }, index) => {
    const result = growingPlant(input[0], input[1], input[2]);
    if (result === expected) {
      console.log(`✓ Test ${index + 1}: growingPlant(${input[0]}, ${input[1]}, ${input[2]}) => ${result}`);
      passed++;
    } else {
      console.log(`✗ Test ${index + 1}: growingPlant(${input[0]}, ${input[1]}, ${input[2]}) => Expected ${expected}, got ${result}`);
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
// upSpeed: 100
// downSpeed: 10
// desiredHeight: 910

// Expected Output:
// 10
