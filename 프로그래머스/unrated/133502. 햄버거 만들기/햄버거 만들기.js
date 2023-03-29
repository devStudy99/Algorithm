function solution(ingredient) {
    
    let order = [];
    let answer = 0;
    
    for(let i=0; i<ingredient.length; i++){
        order.push(String(ingredient[i]));
        if(order.length >= 4){
            if(order[order.length-4] + order[order.length-3] + order[order.length-2] + order[order.length-1] === "1231"){
                order.splice(order.length-4);
                answer++;
            }
        }

    }
    
    return answer;

}