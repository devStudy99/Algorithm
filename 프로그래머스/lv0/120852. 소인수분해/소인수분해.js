function solution(n) {
    
    let cnt = 2;
    let num_list = [];
    let answer = [];
    while(cnt <= n){
        if(n%cnt===0){
            n /= cnt
            num_list.push(cnt);
        } else {
            cnt++;
        }
    }
    num_list.map(num=>{
        if(!answer.includes(num)){
            answer.push(num);
        }
    })
    return answer;
}