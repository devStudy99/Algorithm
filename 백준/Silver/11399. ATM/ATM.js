const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = input[1].split(" ").map(Number);

function solution(arr) {
  arr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= i; j++) {
      sum += arr[j];
    }
  }
  console.log(sum);
}

solution(arr);