function solution(a, b) {
    const isOddA = a%2 !== 0;
    const isOddB = b%2 !== 0;
    return isOddA && isOddB ? a*a + b*b : isOddA || isOddB ? 2*(a + b) : Math.abs(a - b);
}