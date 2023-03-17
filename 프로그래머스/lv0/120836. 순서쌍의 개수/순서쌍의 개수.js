function solution(n) {
    let cnt = 1;
    let answer = 0;
    while(cnt <= n){
        if(n%cnt === 0){
            answer++;
        }
        cnt++;
    }
    return answer;
}