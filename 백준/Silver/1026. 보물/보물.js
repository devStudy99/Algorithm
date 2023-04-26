const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr1 = input[1].split(" ").map(Number);
const arr2 = input[2].split(" ").map(Number);
function solution(num, arr1, arr2) {
  arr1.sort((a, b) => b - a);
  arr2.sort((a, b) => a - b);
  let sum = 0;
  arr1.forEach((v, i) => {
    sum += v * arr2[i];
  });
  console.log(sum);
}

solution(input[0], arr1, arr2);