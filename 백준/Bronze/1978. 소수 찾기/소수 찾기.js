const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const TESTCASE = input.shift();
input = input[0].split(" ").map((item) => +item);
let cnt = 0;

function isPrime(num) {
  if (num === 1) return;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return;
  }
  return num;
}

for (let i = 0; i < TESTCASE; i++) {
  if (isPrime(input[i])) cnt++;
}
console.log(cnt);
