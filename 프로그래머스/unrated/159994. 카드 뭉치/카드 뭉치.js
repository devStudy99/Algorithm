function solution(cards1, cards2, goal) {

    let cards1Temp = [...cards1];
    let cards2Temp = [...cards2];
    
    let answer = "Yes";
    
    goal.forEach(v=>{
        if(cards1.includes(v)){
            if(cards1Temp.shift() !== v) answer = "No";
        }
        if(cards2.includes(v)){
            if(cards2Temp.shift() !== v) answer = "No";
        }
    })
    
    return answer;
    
}