const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const arr = Array.from({ length: parseInt(input[0]) }, (_, i) => i + 1);

function solution(arr) {
  const answer = [];
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    answer.push(arr.shift());
    arr.push(arr.shift());
  }
  console.log(answer.join(" "));
}

solution(arr);
