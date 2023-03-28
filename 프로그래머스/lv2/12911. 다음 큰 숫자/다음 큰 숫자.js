function solution(n) {

    let next = n;
    
    while(next++){
        if((n.toString(2).replace(/0/g, '').length) === (next.toString(2).replace(/0/g, '').length)) break;
    }
    
    return next;
}