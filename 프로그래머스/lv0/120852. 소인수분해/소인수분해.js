function solution(n) {
    
    let cnt = 2;
    let num_list = [];
    let answer1 = [];
    while(cnt <= n){
        if(n%cnt===0){
            n /= cnt
            num_list.push(cnt);
        } else {
            cnt++;
        }
    }
    // num_list.map(num=>{
    //     if(!answer.includes(num)){
    //         answer.push(num);
    //     }
    // })
    
    // return answer1;
    
    let answer2 = new Set(num_list);
    return [...answer2];
}