/*
Description

You are given a string S. Print the reversed version of the string.

Note : You must not use any extra space. You must not use any inbuilt function.


Input
Input Format

The first and only line contains string S.

Constraints

Length of string < 100


Output
Reverse the provided string and output it.


Sample Input 1 

masaischool
Sample Output 1

loohcsiasam

*/

function runProgram(input) {
  var str = input.trim();
  var res = '';
  for(var i=str.length-1;i>=0;i--){
  	res+=str[i]
  }
    console.log(res)
}

var input = `masaischool`
runProgram(input)