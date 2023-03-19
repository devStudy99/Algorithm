function solution(quiz) {
    let answer = [];
    
    quiz.map(v=>{
        
        const [x, operator, y, , z] = v.split(" ");
        
        let sum = 0;
        
        if(operator === "+"){
            sum = Number(x) + Number(y);
        } else {
            sum = Number(x) - Number(y);
        }        
        sum === Number(z) ? answer.push("O") : answer.push("X");
        
    })
    
    return answer;
}