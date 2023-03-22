function solution(t, p) {
    
    let str = "";
    let cnt = 0;
    
    for(let i=0; i<=t.length-p.length; i++){
        for(let j=0; j<p.length; j++){
            str += t[i+j];
        }
        if(+str <= p) cnt++;
        str = "";
    }
    
    return cnt;
    
}