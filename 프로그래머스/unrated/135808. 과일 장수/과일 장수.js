function solution(k, m, score) {
    
    score.sort((a,b)=>b-a);
    
    let boxArr = Array.from(Array(Math.ceil(score.length/m)), () => new Array(0));
                           
    let boxCnt = 0;
    let appleCnt = 0;
    
    for(let i=0; i<score.length; i++){
        boxArr[boxCnt].push(score[i]);
        appleCnt += 1;
        if(appleCnt === m){
            appleCnt = 0;
            boxCnt += 1;
        }
    }
    
    let answer = 0;
    
    boxArr.map(v=>{
        if(v.length === m){
            v.sort((a,b)=>a-b);
            answer += v[0] * m;
        }
    })
    
    return answer;
}