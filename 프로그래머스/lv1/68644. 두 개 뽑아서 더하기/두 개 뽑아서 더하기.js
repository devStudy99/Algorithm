function solution(numbers) {
    
    let sums = [];
    
    for(let i=0; i<numbers.length-1; i++){
        for(let j=1; j<numbers.length; j++){
            if(i !== j) sums.push(numbers[i]+numbers[j]);
        }
    }
    
    return [... new Set(sums)].sort((a,b)=>a-b);
    
}