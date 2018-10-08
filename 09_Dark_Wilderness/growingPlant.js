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
  const daily = upSpeed - downSpeed;
  let height = 0;
  let days = 0;

  while (height < desiredHeight) {
    days++;
    height += upSpeed;
    if (height >= desiredHeight) {
      return days;
    } else {
      height -= downSpeed;
    }
  }
}

// Input:
// upSpeed: 100
// downSpeed: 10
// desiredHeight: 910

// Expected Output:
// 10
