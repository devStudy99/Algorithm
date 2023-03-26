function solution(numlist, n) {
    
    numlist.sort((a,b)=>{
        // 절대값 같을 때 더 큰 값 앞에 오도록
        if(Math.abs(n-a) === Math.abs(n-b)){
            return a < b ? 1 : -1;
        }
        // 절대값 차이 가까운 순서니까 오름차순으로
        return Math.abs(n-a) - Math.abs(n-b);
    })
    
    return numlist;
    
    // 음수반환 -> a 먼저, 양수반환 -> b 먼저 -> 작은 수 먼저 나오도록
    // b랑 a의 거리가 같은 상황 -> || 연산자 실행 -> 큰 수 먼저 나오도록
    // return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);

   
}