function solution(n) {
    
    let numbers = String(n).split('').map(Number);
    
    return numbers.reduce((acc, cur) => acc + cur, 0);
    
}