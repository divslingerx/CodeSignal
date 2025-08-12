// Last night you partied a little too hard.Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.

// The pixels in the input image are represented as integers.The algorithm distorts the input image in the following way: Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself.All the pixels on the border of x are then removed.

// Return the blurred image as an integer, with the fractions rounded down.

//     Example

// For

// image = [[1, 1, 1],
// [1, 7, 1],
// [1, 1, 1]]
// the output should be boxBlur(image) = [[1]].

// To get the value of the middle pixel in the input 3 × 3 square: (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1. The border pixels are cropped from the final result.

//     For

// image = [[7, 4, 0, 1],
// [5, 6, 2, 2],
// [6, 10, 7, 8],
// [1, 4, 2, 0]]
// the output should be

// boxBlur(image) = [[5, 4],
// [4, 4]]
// There are four 3 × 3 squares in the input image, so there should be four integers in the blurred output.To get the first value: (7 + 4 + 0 + 5 + 6 + 2 + 6 + 10 + 7) = 47 / 9 = 5.2222 = 5. The other three integers are obtained the same way, then the surrounding integers are cropped from the final result.

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] array.array.integer image

// An image, stored as a rectangular matrix of non - negative integers.

// Guaranteed constraints:
// 3 ≤ image.length ≤ 10,
//     3 ≤ image[0].length ≤ 10,
//         0 ≤ image[i][j]≤ 255.

//         [output] array.array.integer

// A blurred image represented as integers, obtained through the process in the description.

function boxBlur(image) {
  const result = [];
  
  // Process each valid center pixel (excluding border)
  for (let x = 1; x < image.length - 1; x++) {
    const row = [];
    for (let y = 1; y < image[0].length - 1; y++) {
      let sum = 0;
      
      // Sum the 3x3 square around current pixel
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          sum += image[x + dx][y + dy];
        }
      }
      
      row.push(Math.floor(sum / 9));
    }
    result.push(row);
  }
  
  return result;
}

function runTests() {
  const testCases = [
    { 
      input: [[1,1,1], [1,7,1], [1,1,1]], 
      expected: [[1]] 
    },
    { 
      input: [[7,4,0,1], [5,6,2,2], [6,10,7,8], [1,4,2,0]], 
      expected: [[5,4], [4,4]] 
    },
    { 
      input: [[36,0,18,9], [27,54,9,0], [81,63,72,45]], 
      expected: [[40,30]] 
    },
    { 
      input: [[7,4,0,1,4], [5,6,2,2,0], [6,10,7,8,1], [1,4,2,0,2]], 
      expected: [[5,4,2], [4,4,2]] 
    },
    { 
      input: [[1,1,1,1,1], [1,1,1,1,1], [1,1,1,1,1]], 
      expected: [[1,1,1]] 
    }
  ];

  console.log('Testing boxBlur...');
  let passed = 0;
  let failed = 0;

  testCases.forEach(({ input, expected }, index) => {
    const result = boxBlur(input);
    const isEqual = JSON.stringify(result) === JSON.stringify(expected);
    if (isEqual) {
      console.log(`✓ Test ${index + 1}: boxBlur passed`);
      passed++;
    } else {
      console.log(`✗ Test ${index + 1}: boxBlur => Expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}`);
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
// image: [[1,1,1],
//  [1,7,1],
//  [1,1,1]]

// Expected Output:
// [[1]]
