function solution(num) {
    let temp = num;
    let cnt = 0;
    while(num > 1){

        while(num%2===0){
            num = num/2;
            cnt++;
            if(cnt >= 500 && num !== 1) return -1;
        }
        
        if(num!==1 && num%2!==0){
            num = num*3 +1;
            cnt++;
        }
        
        if(cnt >= 500 && num !== 1) return -1;
    }
    return temp === 1 ? 0 : cnt;
}