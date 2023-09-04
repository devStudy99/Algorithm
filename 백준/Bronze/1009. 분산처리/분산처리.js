const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const T = input.shift('')*1;

input.map((v) => {
    const [a,b] = v.split(' ');
    let pow = 1
    for(let i = 0; i < b; i++) {
        pow = (pow * a) % 10; // 10으로 나눈 나머지 값은 항상 같음
    }
    console.log(pow === 0 ? 10 : pow); // 0이 나오면 10번째 컴퓨터가 데이터를 처리했음을 알려주기
});