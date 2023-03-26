function solution(food) {
   
    let answer = '';

    food = food.map((v, i) => {        
        if(i!==0) answer += String(i).repeat(~~(v/2));
    });
    
    return answer + '0' + answer.split('').reverse().join('');

}