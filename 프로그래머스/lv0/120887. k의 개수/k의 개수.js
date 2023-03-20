function solution(i, j, k) {
    
    let str = "";
    
    for(let s=i; s<=j; s++){
        str += s;
    }
    
    return str.split('').filter(v=>Number(v)===k).length;

}