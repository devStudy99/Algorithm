function solution(lines) {
    
    let answer = 0;
    
    const newLines = new Array(200);
    newLines.fill(0);
    
    for(let i=0; i<3; i++){
        let start = lines[i][0];
        let end = lines[i][1];
        
        // 음수가 있으니까 +100해줘서 0~200으로 만들기
        for(let j=start; j<end; j++){
            newLines[j+100] += 1;
        }
    }
    
    // 2개 이상이면 겹치는 부분
    for(let i in newLines){
        if(newLines[i]>1) answer += 1;
    }
    
    return answer;
    
}