const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const A = input[1].split(" ").map((el) => +el);
const B = input[3].split(" ").map((el) => +el);

solution(A, B);
function solution(N, M) {
  N = N.sort((a, b) => a - b);
  let answer = [];
  M.forEach((el) => {
    let high = N.length - 1;
    let low = 0;
    let find = false; 
    while (low <= high) {
      let mid = Math.floor((high + low) / 2);

      if (el > N[mid]) {
        low = mid + 1;
      } else if (el < N[mid]) {
        high = mid - 1;
      } else {
        find = true;
        break;
      }
    }
    if(find){
        answer.push(1);
    }else{
        answer.push(0);
      }
  });
  console.log(answer.join('\n'))
}