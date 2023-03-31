function solution(n, m, section) {
    
    let wall = new Array(n).fill(true);
    
    section.forEach(v=>{
        wall[v-1] = false;
    })
    
    let answer = 0;
    
    for(let i=0; i<wall.length; i++){
        if(wall[i] === false){
            for(let j=0; j<m; j++){
                wall[i+j] = true;
            }
            answer += 1;
        }
    }

    return answer;
    
}