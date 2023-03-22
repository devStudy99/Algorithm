function solution(participant, completion) {

    participant.sort();
    completion.sort();

    let answer = participant.filter((v,i)=>v!==completion[i]);
    
    return answer[0];
}