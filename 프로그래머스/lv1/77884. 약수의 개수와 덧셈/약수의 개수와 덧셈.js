function solution(left, right) {
    
    let cnt = 0;
    let sum = 0;
    
    for(let i=left; i<=right; i++){
     
        for(let j=1; j<=i; j++){
            if(i%j===0){
                cnt++;
            }
        }

        if(cnt%2===0) sum+=i;
        if(cnt%2!==0) sum-=i;
        
        cnt = 0;
        
    }
    return sum;
}