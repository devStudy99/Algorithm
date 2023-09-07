let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let num = Number(input[0]);

function solution(num) {
    let count = 0;
    for (let i = 1; i <= num ; i ++) {
        let stNum = String(i);
        let dif1 = Number(stNum[1]) - Number(stNum[0]);
        let dif2 = Number(stNum[2]) - Number(stNum[1]);

        if(i < 100) { 
            count ++;
            continue;
        }
        if (dif1 === dif2) {
                count ++;
        }
    }
    return count;
}

console.log(solution(num));