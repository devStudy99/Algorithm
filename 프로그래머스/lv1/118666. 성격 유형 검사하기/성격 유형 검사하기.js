function solution(survey, choices) {
    
    const personality = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 }
    let point = [3, 2, 1, 0, 1, 2, 3];
    
    survey.forEach((v, i)=>{
        if(choices[i] < 4) personality[v[0]] += point[choices[i]-1];
        if(choices[i] > 4) personality[v[1]] += point[choices[i]-1];
    })
    
    const arr = Object.entries(personality);

    const answer = arr.reduce((acc, cur, i) =>{
        if(i%2 === 0){
            if(cur[1] > arr[i+1][1]) acc += cur[0];
            if(cur[1] < arr[i+1][1]) acc += arr[i+1][0];
            if(cur[1] === arr[i+1][1]) acc += cur[0];
        }
        return acc;
    }, "")
    
    return answer;

}