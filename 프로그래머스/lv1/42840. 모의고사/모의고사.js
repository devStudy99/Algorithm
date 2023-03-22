function solution(answers) {
    
    const supo1 = [1, 2, 3, 4, 5];
    const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let cnt1 = 0;
    let cnt2 = 0;
    let cnt3 = 0;
    
    answers.map((v, i)=>{
        if(v === supo1[i%supo1.length]) cnt1++;
        if(v === supo2[i%supo2.length]) cnt2++;
        if(v === supo3[i%supo3.length]) cnt3++;
    })
    
    let rank = [cnt1, cnt2, cnt3];
    
    let answer = [];

    rank.map((v, i)=>{
        if(v===Math.max(...rank)) answer.push(i+1);
    })

    return answer;
}