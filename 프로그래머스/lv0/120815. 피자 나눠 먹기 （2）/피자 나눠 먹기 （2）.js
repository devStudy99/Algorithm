function solution(n) {
    for(let i = n; i > 0; i--){
        if(n%i === 0 && 6%i === 0){
            return n/i;
        }
    }
}
