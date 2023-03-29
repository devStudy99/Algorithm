function solution(s){
    
    let answer = [s[0]];
    
    for(let i=1; i<s.length; i++){
        if(answer[answer.length-1] === "(" && s[i] === ")"){
            answer.pop();
        }else if(answer.length === 0 && s[i] === ")"){
            return false;
        }else{
            answer.push(s[i]);
        }
    }
    
    return answer.length === 0 ? true : false;

}