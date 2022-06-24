// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non - negative integer size.Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that.Help him figure out the minimum number of additional statues needed.

//     Example

// For statues = [6, 2, 3, 8], the output should be
// makeArrayConsecutive2(statues) = 3.

// Ratiorg needs statues of sizes 4, 5 and 7.

// Input / Output

// [execution time limit]4 seconds(js)

// [input] array.integer statues

// An array of distinct non - negative integers.

// Guaranteed constraints:
// 1 ≤ statues.length ≤ 10,
//     0 ≤ statues[i]≤ 20.

//     [output] integer

// The minimal number of statues that need to be added to existing statues such that it contains every integer size from an interval[L, R](for some L, R) and no other sizes.
// [JavaScript(ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

function makeArrayConsecutive2(statues) {
   // max-min to get the range 
  // subtract the length to get the number of needed statues
  // add one to account for zero index
  return Math.max(...statues)-Math.min(...statues)-statues.length+1
}
