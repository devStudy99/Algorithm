function solution(n) {
//     let answer = [];
    
//     for(let i=1; i<=n; i++){
//        if(n%i===0){
//            answer.push(i);
//        } 
//     }
    
//     return answer;
    
    // n개의 빈배열을 0값으로 채운 뒤 n으로 나눴을 때 나머지 0인 값들만 남도록
    return Array(n).fill(0).map((v, index) => index+1).filter((v) => n%v===0);
    
}