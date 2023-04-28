const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

function solution(num1, num2) {
  if (num1 > num2) console.log(">");
  if (num1 < num2) console.log("<");
  if (num1 === num2) console.log("==");
}

solution(parseInt(input[0]), parseInt(input[1]));
