const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = input[0];
const arr = input.slice(1);

function solution(num, arr) {
  const newArr = [...new Set(arr)];
  newArr.sort((a, b) => {
    if (a.length === b.length) return a.localeCompare(b);
    if (a.length < b.length) return -1;
    if (a.length > b.length) return 1;
    return 0;
  });
  for (let word of newArr) {
    console.log(word);
  }
}

solution(num, arr);