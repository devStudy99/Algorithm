const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

input.shift();

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function gcd(a, b) {
  while (b != 0) {
    // [a,b] = [b, a]를 사용하여 두 수의 위치를 변경
    // 한마디로 a=6, b=15 이면 첫 반복에는 [6, 15] = [15, 6 % 15 ]
    // 두 번째 반복 [15, 6] = [6, 15 % 6 ]
    // 세 번째 반복 [6, 3] = [6, 6 % 3];
    // 실행 후 a= 3, b = 0 이 되어 반복 종료
    [a, b] = [b, a % b];
  }
  return a;
}

for (i = 0; i < input.length; i++) {
  const [a, b] = input[i].split(" ");
  console.log(lcm(a, b));
}