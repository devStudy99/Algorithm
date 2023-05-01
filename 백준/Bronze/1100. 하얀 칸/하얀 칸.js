const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution(arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i % 2 === 0 && j % 2 === 0 && arr[i][j] === "F") {
        answer += 1;
      }
      if (i % 2 !== 0 && j % 2 !== 0 && arr[i][j] === "F") {
        answer += 1;
      }
    }
  }
  console.log(answer);
}

solution(input);
