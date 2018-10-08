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
  let t = time.split(/:/);

  let hr = t[0];
  let min = t[1];

  const hrsOk = hr >= 0 && hr <= 23;
  const minOk = min >= 0 && min <= 59;

  return hrsOk && minOk;
}

// Input:
// time: "13:58"
// Output:
// true

// Input:
// time: "25:51"
// Output:
// false
