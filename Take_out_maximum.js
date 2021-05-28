/*
Description

Given an array of integers and a number k, find the maximum sum of a subarray of size k.


Input
Input Format

First line consists of two integers n and k separated by space

Second line consists of n integers separated by spaces.

Constraints

1 <= n <= 10^7

1 <= k <= 10^6


Output
Print the maximum sum of a subarray of size k.


Sample Input 1 

10 3
-1 -1 -2 1 -2 4 1 9 3 9
Sample Output 1

21

*/


function runProgram(input) {
  var newInput = input.split(/[\r\n]+/);
  var length = newInput[0].split(" ").map(Number);
  var  n = length[0];
  var t = length[1];
  var data = newInput[1].split(" ").map(Number);
  var res = 0;
  for(var i=0;i<t;i++){
  	res+=data[i]
  }
  
  var sum = res;
  for(var i=t;i<n;i++){
  	sum+=data[i] - data[i-t];
    res = (Math.max(res,sum));
  }
  console.log(res)
}

var input = `10 3
-1 -1 -2 1 -2 4 1 9 3 9`;
runProgram(input)