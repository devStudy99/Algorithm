function solution(emergency) {
    let copy = emergency;
    let desOrder = emergency.slice().sort((a,b)=>b-a);
    let order = [];
    
    for(let i=copy.length; i>=0; i--){
        for(let j=0; j<desOrder.length; j++){
            if(copy[0] === desOrder[j]){
                order.push(j+1);
                copy.shift();
            }
        }
    }
    return order;
}