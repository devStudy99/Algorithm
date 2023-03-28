function solution(n, arr1, arr2) {
    const temp1 = arr1.map(v=>{
        return v.toString(2).padStart(n, 0);
    })
    const temp2 = arr2.map(v=>{
        return v.toString(2).padStart(n, 0);
    })

    let answer = [];
    let str = "";
    
    for(let i=0; i<temp1.length; i++){
        str += Number(temp1[i])+Number(temp2[i]);
        answer.push(str);
        str = "";
    }
    
    answer.filter((v, i) =>{
        answer[i] = v.padStart(n, 0).replace(/0/g, ' ');
        answer[i] = answer[i].replace(/[1-9]/g, '#');
    })
    
    return answer;
}