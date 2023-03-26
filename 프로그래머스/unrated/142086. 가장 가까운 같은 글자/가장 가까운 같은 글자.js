function solution(s) {
    var answer = [];
    let tmp = '';
    for(let i=0; i<s.length; i++){
        if(tmp.includes(s[i])){
            answer.push(i - tmp.lastIndexOf(s[i]));
        } else {
            answer.push(-1);
        }
        tmp += s[i];
    }
    return answer;
}