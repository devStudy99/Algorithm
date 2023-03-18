function solution(numbers) {
    
//     let max = 0;
    
//     numbers.map((first, i)=>{
//         numbers.map((second, j)=>{
//             if(i !== j && max <= first*second){
//                 max = first * second;
//             }
//         })
//     })
    
//     return max;
    
    numbers.sort((a,b)=>b-a);
    
    return numbers[0]*numbers[1];
}