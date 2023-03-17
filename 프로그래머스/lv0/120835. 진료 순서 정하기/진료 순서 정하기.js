function solution(emergency) {
    let desOrder = [...emergency].sort((a,b)=>b-a);
    let order = [];
    
    emergency.map((item)=>{
        for(let i=0; i<emergency.length; i++){
            if(item === desOrder[i]){
                order.push(i+1);
            }
        }
    })
    return order;
}