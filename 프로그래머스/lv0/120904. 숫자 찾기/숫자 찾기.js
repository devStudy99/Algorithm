function solution(num, k) {
    
    const answer = String(num).indexOf(String(k));
    
    return answer === -1 ? -1 : answer+1; 
}