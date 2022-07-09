// Some people are standing in a row in a park.There are trees between them which cannot be moved.Your task is to rearrange the people by their heights in a non - descending order without moving the trees.People can be very tall!

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] array.integer a

// If a[i] = -1, then the ith position is occupied by a tree.Otherwise a[i] is the height of a person standing in the ith position.

// Guaranteed constraints:
// 1 ≤ a.length ≤ 1000,
//     -1 ≤ a[i]≤ 1000.

//     [output] array.integer

// Sorted array a with all the trees untouched.

function solution(a) {
    const isTree = (n) => n === -1
    const sortLH = (a,b) => a-b
    
    //sort the people from LTH
    const sortedPeople = [...a].sort(sortLH).filter(i => !isTree(i))
    return a.map((itm, idx) => isTree(itm) ? itm : sortedPeople.shift())
}
