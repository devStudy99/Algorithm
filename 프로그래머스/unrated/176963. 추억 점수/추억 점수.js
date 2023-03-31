function solution(name, yearning, photo) {
    const answer = photo.map(v1=>{
        let sum = 0;
        v1.map(v2=>{
            if(name.includes(v2)){
                sum += yearning[name.indexOf(v2)];
            }
        })
        return sum;
    })
    return answer;
}