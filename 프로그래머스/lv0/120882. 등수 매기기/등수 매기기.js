function solution(score) {
    
    let average = score.map((v, i)=>{
        return (v.reduce((acc,cur)=>acc+cur, 0))/2;
    })
 
    let rank = [...average].sort((a,b)=>b-a);
    
    return average.map(v => rank.indexOf(v)+1);
}