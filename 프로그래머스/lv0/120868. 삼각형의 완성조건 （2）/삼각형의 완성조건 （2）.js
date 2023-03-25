function solution(sides) {

    sides.sort((a,b)=>b-a);
    
    let max = sides[0];
    let min = sides[1];
   
    let cnt = 0;

    for(let i=1; i<max+min; i++){
        if((min + i > max) && (i < max + min)){
            cnt++;
        }
    }
    
    return cnt;
    
}