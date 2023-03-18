function solution(array, n) {
    array.push(n);
    array.sort((a,b)=>a-b);
    
    let before = array.indexOf(n)-1;
    let after = array.indexOf(n)+1;
    
    return n-array[before]>array[after]-n ? array[after] : array[before];
}