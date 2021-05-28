/*
Description

Given an array of integers, return indices of two numbers such that they add up to a target value.

Print -1 -1 if not found.


Input
First line contains T, number of test cases

Second line contains N and B where N is the size of the array and B is the target sum

1 <= T <= 10

2 <= N <= 1000, 2 <= B <= 3e5

1 <= Ai <= 1e5

it is guaranteed that sum of N over all test cases is at most 1000.


Output
Two values a, b i.e. indexes of any two elements that are found else -1 -1 if not found. Indexing is 0 based indexing. If multiple solutions exist, output the one with the lowest values of a and b.

Note - the answer should print the smaller index first followed by the larger index. The smallest such index pair should be printed.

If we have 2 sorted pairs [a1, b1] and [a2, b2], the first pair is said to be smaller than the second one if a1 < a2 or (a1 == a2 and b1 < b2 )


Sample Input 1 

3
4 9
2 7 11 15
5 10
1 2 3 5 5
2 100
48 49
Sample Output 1

0 1
3 4
-1 -1

*/


function runProgram(input) {
  var newInput = input.split(/[\r\n]+/);
  var testcase = Number(newInput[0]);
  
  for(var a=1;a<=testcase;a++){
  	var length = newInput[a*2-1].split(" ").map(Number);
    var n = length[0];
    var t = length[1]
    var data = newInput[a*2].split(" ").map(Number);
    var arr = []
    for(var i=0;i<n;i++){
      for(var j=i+1;j<n;j++){
    	if(data[i]+data[j] == t){
        	arr.push([i,j])
          }
        }
    }
  //console.log(arr)
     if(arr[0] == undefined){
      	console.log(-1,-1) 
     }else{
     console.log(arr[0][0],arr[0][1]);
     }
  }
}


var input = `3
4 9
2 7 11 15
5 10
1 2 3 5 5
2 100
48 49`;
console.log(input)
runProgram(input)