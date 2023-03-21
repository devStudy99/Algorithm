function solution(n, m) {
    
    let min = 0;
    let max = 0;
    
    // 최대공약수(공통된 약수)
    for(let i=1; i<=m; i++){
        if(n%i===0 && m%i===0){
            max = i;
        }
    }
    
    // 최소공배수(두 수를 곱한 후 최대공약수만큼 나누기)
    min = n*m/max;
    
    return [max, min];
    
}