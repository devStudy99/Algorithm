function solution(n) {
    // return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
    return Math.sqrt(n)%1===0 ? 1 : 2;
}