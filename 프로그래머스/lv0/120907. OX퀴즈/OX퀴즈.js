function solution(quiz) {
    let temp = [];
    let answer = [];
    
    quiz.map(v=>{
        
        temp = v.split(" ");
        
        if(temp[1] === "+"){
            if(Number(temp[0]) + Number(temp[2]) === Number(temp[4])){
                answer.push("O");
            }else{
                answer.push("X");
            }
        } else {
            if(Number(temp[0]) - Number(temp[2]) === Number(temp[4])){
                answer.push("O");
            }else{
                answer.push("X");
            }
        }        
    
    })
    return answer;
}