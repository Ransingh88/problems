/*
Description

You are given a sentence of words. Your task is to write a program that calculates number of words present in it.

Note: Sentence has just words separated by space (if there is more than one word) and it does not have any other character.


Input
Input Format

First line contains a sentence of different words separated by space

Constraints

There can be at most 1000 words in sentence


Output
Output Format

Output number of different words present in the sentence


Sample Input 1 

Transformation in education
Sample Output 1

3

*/

function runProgram(input) {
  var s = input.trim();
  var arr = s.split(" ");
  console.log(arr.length)
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});


var input = `Transformation in education`;
runProgram(input)