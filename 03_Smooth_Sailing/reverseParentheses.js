// You have a string s that consists of English letters, punctuation marks, whitespace characters, and brackets.It is guaranteed that the parentheses in s form a regular bracket sequence.

// Your task is to reverse the strings contained in each pair of matching parentheses, starting from the innermost pair.The results string should not contain any parentheses.

//     Example

// For string s = "a(bc)de", the output should be
// reverseParentheses(s) = "acbde".

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] string s

// A string consisting of English letters, punctuation marks, whitespace characters and brackets.It is guaranteed that parentheses form a regular bracket sequence.

//     Constraints:
// 5 ≤ s.length ≤ 55.

// [output] string

function solution(inputString) {
    while (inputString.includes('(')) {
        inputString = inputString.replace(/\(([^()]*)\)/, (_, str) => [...str].reverse().join(''));
    }
    return inputString;
}

