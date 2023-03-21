function solution(a, b) {
    
    // 소수일 경우 1로 나누기 위함
    let m = 1;
    
    for (let i = 1; i<= b; i++){
        if(a%i ===0 && b%i ===0){
            m = i;
        }
    }
    
    b = b/m;

    while (b%2 === 0) b = b/2;
    while (b%5 === 0) b = b/5;

    // b가 1이라면 유한소수 그 외의 값은 무한소수
    return b === 1 ? 1 : 2;
}