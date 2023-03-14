function solution(numer1, denom1, numer2, denom2) {
    // 분자  1 * 4 + 3 * 2  = 10
    const numer = numer1 * denom2 + numer2 * denom1;
    // 분모  2 * 4 = 8 
    const denom = denom1 * denom2;
    // 최소 공배수
    let lcm = 1;
    // 약분
    for(let i = 1; i <= numer; i++){
        if(numer%i === 0 && denom%i === 0){
            lcm = i;
        }
    }
    return [numer/lcm, denom/lcm];
}