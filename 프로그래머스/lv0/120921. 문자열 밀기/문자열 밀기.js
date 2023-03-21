function solution(A, B) {
    
    let arr = A.split('');
    let cnt = 0;
    
    if(A === B) return 0;
    
    for(let i=0; i<arr.length; i++){
        arr.unshift(arr.pop());
        cnt++;
        if(arr.join('') === B){
            return cnt;
        }
    }
    return -1;
    
    
}