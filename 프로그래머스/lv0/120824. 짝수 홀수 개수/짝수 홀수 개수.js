function solution(num_list) {
    var answer = [];
    let evenCnt = 0;
    let oddCnt = 0;
    let cnt = 0;
    while(cnt < num_list.length){
        if(num_list[cnt]%2===0){
            evenCnt++;
        } else {
            oddCnt++;
        }    
        cnt++;
    }
    answer.push(evenCnt);
    answer.push(oddCnt);
    return answer;
}