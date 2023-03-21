function solution(a, b) {
    let sum = 0;
    a.map((v,i)=>sum+=v*b[i]);
    return sum;
}