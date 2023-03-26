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
   
}