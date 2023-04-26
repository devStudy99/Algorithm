const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const M = parseInt(input[0]);
const N = parseInt(input[1]);
function solution(M, N) {
  const answer = new Array(N + 1).fill(true);
  answer[0] = false;
  answer[1] = false;
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (answer[i]) {
      for (let j = i * i; j <= N; j += i) {
        answer[j] = false;
      }
    }
  }
  for (let i = M; i <= N; i++) {
    if (answer[i]) {
      console.log(i);
    }
  }
}

solution(M, N);