function solution(brown, yellow) {
    
    let arr = [];
    let answer = [];
    
    for(let i=3; i<=brown/2; i++){
        
        let width = 0;
        let height = 0;
        
        if((brown+yellow)%i===0){
            height = (brown+yellow)/i;
            width = (brown+yellow)/height;
        }
        if(width !== 0 && height !== 0 && width >= height){
            arr.push([width, height]);
        }
    }
    
    arr.forEach(v=>{
        if((v[0]-2) * (v[1]-2) === yellow) answer = v;
    })
   
    return answer;
}