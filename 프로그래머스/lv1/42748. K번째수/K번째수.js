function solution(array, commands) {
    
    let answer = commands.map(v=>{
        let arr = array.slice(v[0]-1, v[1]).sort((a,b)=>a-b);
        return arr.length === 1 ? arr[0] : arr[v[2]-1];
    })
    return answer;

}
