function solution(N, stages) {
    
    let success = 0;
    let fail = 0;
    
    let failureRate = [];
    
    for(let i=1; i<=N; i++){
        for(let j=0; j<stages.length; j++){
            if(i===stages[j]){
                fail++;
            }
            if(i<stages[j]){
                success++;
            }
        }
        if(success === 0 && fail === 0){
            failureRate.push(0);
        }else{
            failureRate.push(fail/(success+fail));
        }
        success = 0;
        fail = 0;
    }

    let answer = [];
    let cnt = 0;

    while(cnt < failureRate.length){
        let maxIndex = failureRate.indexOf(Math.max(...failureRate));
        answer.push(maxIndex+1);
        failureRate.splice(maxIndex, 1, -1);
        cnt++;
    }
    
    return answer;

}