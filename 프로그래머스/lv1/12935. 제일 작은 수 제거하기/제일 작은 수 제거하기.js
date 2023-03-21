function solution(arr) {
    
    let answer = [...arr]; 
    
    let min = arr.sort((a,b)=>b-a).pop();
        
    answer = answer.filter(v=>v!==min);

    return answer.length === 0 ? [-1] : answer;
    
}