const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");

function solution(arr) {
  console.log(arr.sort((a, b) => b - a).join(""));
}

solution(input);
