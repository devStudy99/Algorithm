function solution(X, Y) {
    
    let numlist = new Array(10).fill(0);
    let answer = "";
    
    for(let i=0; i<=9; i++){
        const regex = new RegExp(i, 'g');
        let xCnt = X.length - X.replace(regex, '').length;
        let yCnt = Y.length - Y.replace(regex, '').length;
        if(xCnt !== 0 && yCnt !== 0){
            xCnt > yCnt ? numlist[i] = yCnt : xCnt < yCnt ? numlist[i] = xCnt : numlist[i] = xCnt;
        }        
    }
    
    if(numlist.join('').replace(/0/g, '') === ""){
        return "-1";
    }
    
    for(let i=0; i<numlist.length; i++){
        answer += String(i).repeat(numlist[i]);
    }
    
    return answer.replace(/0/g, '') === "" ? "0" : answer.split('').reverse().join('');
    
}