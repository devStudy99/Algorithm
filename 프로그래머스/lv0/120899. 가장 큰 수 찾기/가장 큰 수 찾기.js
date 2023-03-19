function solution(array) {
    
    let temp = [...array];
    let answer = [];
    
    temp.sort((a,b)=>b-a);
    answer.push(temp[0]);
    answer.push(array.indexOf(temp[0]));
    
    return answer;
    
}