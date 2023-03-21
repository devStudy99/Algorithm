function solution(num, total) {
    let temp = 0;
    let sum = 0;
    let answer = [];
    
    for(let i=-100; i<=total; i++){
        
        temp = i;
        for(let j=0; j<num; j++){
            sum+= temp;
            temp++;
        }

        if(sum === total){
            temp = temp - num;
            for(let i=0; i<num; i++){
                answer.push(temp);
                temp++;
            }
            return answer;
        } 
        sum = 0;  
    }

}