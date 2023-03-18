function solution(numbers) {
    let max = 0;
    numbers.map((number, i)=>{
        for(let j=0; j<numbers.length; j++){
            if(i !== j && max <= number*numbers[j]){
                max = number*numbers[j];
            }
        }
    })
    return max;
}