function solution(d, budget) {
    
    d.sort((a,b)=>a-b);
    
    let cnt = 0;

    while(budget - d[cnt] >= 0){
        budget -= d[cnt];
        cnt++;
    }
    
    return cnt;
}