function solution(survey, choices) {
    
    let personality = ["R", "T", "C", "F", "J", "M", "A", "N"];
    let sumArr = [0, 0, 0, 0, 0, 0, 0, 0];
    let point = [3, 2, 1, 0, 1, 2, 3];
    
    survey.forEach((v, i)=>{
        // 1~3까지는 0번째
        if(choices[i] < 4){
            // a번째 인덱스와 매칭되는 b인덱스에 점수 추가
            sumArr[personality.indexOf(v[0])] += point[choices[i]-1];
        }
        // 5~7까지는 1번째
        if(choices[i] > 4){
            // a번째 인덱스와 매칭되는 b인덱스에 점수 추가
            sumArr[personality.indexOf(v[1])] += point[choices[i]-1];
        }
    })

    const result = sumArr.reduce((acc, cur, i) => {
      if (i % 2 === 0) {
        acc.push([cur, sumArr[i + 1]]);
      }
      return acc;
    }, []);
    
    let answer = "";
    let pi = 0;
    
    result.forEach((v, i)=>{
        if(v[0] > v[1]) answer += personality[pi];
        if(v[0] < v[1]) answer += personality[pi+1];
        if(v[0] === v[1]) answer += personality[pi];
        pi += 2;
    })
    
    return answer;
}