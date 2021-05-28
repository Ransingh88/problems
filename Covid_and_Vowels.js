/*
Description

Given a string S, find the number of substrings which contains all the vowels present in "coronavirus".


Input
Input Format

The single line consists of string S

Constraints

Length of S <=100


Output
Print count of substrings in a single line


Sample Input 1 

dangerouscovid
Sample Output 1

4
Hint

Sample 1 Explanation

Out of all possible substrings following 4 substrings have all vowels [a,i,o,u]

dangerouscovi

dangerouscovid

angerouscovi



*/

function runProgram(input) {
  var s = input.trim();
  var count = 0;
  for(var i=0;i<s.length;i++){
  		for(var j=i+1;j<=s.length;j++){
        	if(s.substring(i,j).includes('a') && s.substring(i,j).includes('i') && s.substring(i,j).includes('o') && s.substring(i,j).includes('u')){
             	 
                   count++;
            }
        }
  }
  console.log(count)
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


var input = `dangerouscovid`
runProgram(input)