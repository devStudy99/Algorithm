function solution(n, lost, reserve) {

    lost.sort((a,b)=>a-b);
    reserve.sort((a,b)=>a-b);
    
    let newLost = lost.filter(v=>!reserve.includes(v));
    let newReserve = reserve.filter(v=>!lost.includes(v));

    newReserve.forEach(v=>{
        if(newLost.includes(v-1)){
            newLost.splice(newLost.indexOf(v-1), 1);
        }else if(newLost.includes(v+1)){
            newLost.splice(newLost.indexOf(v+1), 1);
        }
    })
    
    return n - newLost.length;

}