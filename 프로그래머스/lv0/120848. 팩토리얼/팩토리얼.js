function solution(n) {
    let mul = 1;
    for(let i=1; i<=n; i++){
        mul *= i;
        if(mul === n){
            return i;
        } else if(mul > n){
            return i-1;
        }
    }
}