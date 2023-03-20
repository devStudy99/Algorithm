function solution(before, after) {
    
    let beforeArr = before.split('').sort();
    let afterArr = after.split('').sort();
    
    let answer = 1;
    
    beforeArr.map((v, i)=>{
        if(v !== afterArr[i]){
            answer = 0;
        }
    })
    
    return answer;
    
}