function solution(s, skip, index) {
    
    let alp = "abcdefghijklmnopqrstuvwxyz";
    
    for(let i=0; i<skip.length; i++){
        alp = alp.replace(skip[i], '');
    }
    
    let answer = "";
    
    for(let i=0; i<s.length; i++){
        let idx = alp.indexOf(s[i])+index;
        if(idx >= alp.length){
            answer += alp[idx%alp.length];
        }else{
            answer += alp[idx];
        }
    }
    
    return answer;

}