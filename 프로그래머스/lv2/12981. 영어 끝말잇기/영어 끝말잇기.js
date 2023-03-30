function solution(n, words) {
    
    let said = [];
    let cnt = 1;
    
    let answer = [0, 0];
    
    words.some((v, i)=>{
        // 시작하는 단어 틀릴 경우 || 이미 말한 단어를 말한 경우
        if((i !== 0 && v[0] !== words[i-1][words[i-1].length-1]) || said.includes(v)){
            if((i+1)%n===0){
                answer[0] = n;
            }else{
                answer[0] = (i+1)%n;
            }
            answer[1] = cnt;
            return true;
        }
        // 한바퀴 돌면 차례 +1
        if((i+1)%n===0) cnt++;
        said.push(v);
    })
    
    return answer;
}