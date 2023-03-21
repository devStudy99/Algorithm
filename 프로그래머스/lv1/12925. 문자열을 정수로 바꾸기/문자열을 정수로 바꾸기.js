function solution(s) {
    
    let operator = "";
    let num = 0;
    let arr = s.split('');
    
    if(s[0] === "+" || s[0] === "-"){
        operator = s[0];
        arr.shift();
        num = +(arr.join(''));
    } 

    return operator === "+" ? +num : operator === "-" ? -num : +s;
}