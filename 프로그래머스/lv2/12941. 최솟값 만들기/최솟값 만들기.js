function solution(A,B){
    
    // 내림차순과 오름차순으로 정렬 후 곱하면 최솟값됨
    A.sort((a,b)=>b-a);
    B.sort((a,b)=>a-b);
    
    let answer = 0;
    
    for(let i=0; i<A.length; i++){
        answer += A[i] * B[i];
    }
    
    return answer;
    
}