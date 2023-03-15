function solution(n, k) {
    let drink = k;
    if(k !== 0){
        k -= Math.floor(n/10);
    }
    return n*12000 + k*2000;
}