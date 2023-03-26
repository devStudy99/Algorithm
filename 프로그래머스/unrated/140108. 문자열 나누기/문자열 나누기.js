function solution(s) {
    
    let arr = s.split('');
    
    let xCnt = 1;
    let yCnt = 0;
    let cnt = 1;
    
    let tmp = arr[0];
    let answer = [];
    
    while(arr.length){
        
        if(tmp === arr[cnt]) xCnt++;
        if(tmp !== arr[cnt]) yCnt++;

        if(xCnt === yCnt){
            answer.push(arr.splice(0, xCnt*2));
            tmp = arr[0];
            xCnt = 1;
            yCnt = 0;
            cnt = 0;
        }
        cnt++;
    }

    return answer.length;
    
    

}