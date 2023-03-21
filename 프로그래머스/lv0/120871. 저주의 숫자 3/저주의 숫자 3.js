function solution(n) {
    let cnt = 1;
    let num = 1;
    
    while(cnt < n){
        cnt++;
        num++;
        while(String(num).includes(3) || num%3 === 0){
            num++;
        }
    }
    
    return num;
}