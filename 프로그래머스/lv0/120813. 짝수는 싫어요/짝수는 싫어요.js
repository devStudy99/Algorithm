function solution(n) {
    var answer = [];
    let cnt = 1;
    while(cnt <= n){
        if(cnt % 2 !== 0){
            answer.push(cnt);
        }
        cnt++;
    }
    answer.sort((a,b) => a-b);
    return answer;
}