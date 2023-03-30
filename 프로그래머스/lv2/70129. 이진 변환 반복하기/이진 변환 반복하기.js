function solution(s) {
    
    let answer = new Array(2).fill(0);
    
    while(s !== "1"){
        answer[1] += s.replace(/[1-9]/g, '').length;
        s = s.replace(/0/g, '').length.toString(2);
        answer[0] += 1;
    }
    
    return answer;

}