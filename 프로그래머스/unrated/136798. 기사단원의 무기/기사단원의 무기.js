function solution(number, limit, power) {
    
    let divisor = [];
    let cnt = 0;
    let answer = 0;
    let lastDivisor = 0;
    
    for(let i=1; i<=number; i++){
        for(let j=1; j<=i; j++){
            if(i%j===0){
                if(lastDivisor === j){
                    break;
                }
                lastDivisor = i/j;
                // 소수인 경우와 아닌 경우
                if(j*j===i){
                    cnt += 1;
                    break;
                }else{
                    cnt += 2;   
                }
            }
        }
        divisor.push(cnt);
        cnt = 0;
        lastDivisor = 0;
    }
    
    divisor.forEach(v=>{
        if(v>limit) answer += power;
        if(v<=limit) answer += v;
    })
    
    return answer;
    
}