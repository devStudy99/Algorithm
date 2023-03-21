function solution(absolutes, signs) {
    
    let arr = [];
    
    absolutes.map((v, i) => signs[i] === true ? arr.push(+v) : arr.push(-v))
    
    return arr.reduce((acc, cur)=>acc+cur, 0);
}