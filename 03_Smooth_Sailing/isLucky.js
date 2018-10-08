// Ticket numbers usually consist of an even number of digits.A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.
//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] integer n

// A ticket number represented as a positive integer with an even number of digits.

// Guaranteed constraints:
// 10 ≤ n < 106.

// [output] boolean

// true if n is a lucky ticket number, false otherwise.

function isLucky(n) {
  //check that n is even
  if (n % 2 !== 0) return false;
  //create arr from n. digits will be strings so we use map to parse int
  var fullArr = ("" + n).split("").map(function(str) {
    return parseInt(str);
  });

  //split the array in half and sum the 2 halfs

  function checkLuck() {
    var sum1 = 0,
      sum2 = 0;
    for (var i = 0; i < fullArr.length; i++) {
      //at half way through the array add sum the digits on sum2
      if (i < fullArr.length / 2) {
        sum1 += fullArr[i];
      } else {
        sum2 += fullArr[i];
      }
    }
    return sum1 === sum2;
  }

  return checkLuck();
}
