function solution(k, score) {
    
    let hallFrame = [];
    let answer = [];

    for(let i=0; i<score.length; i++){
        hallFrame.push(score[i]);
        hallFrame.sort((a,b)=>a-b);   
        if(i>=k){
            hallFrame.shift();    
        }
        answer.push(hallFrame[0]);
    }
    
    return answer;
}