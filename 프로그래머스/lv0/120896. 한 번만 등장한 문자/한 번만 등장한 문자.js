function solution(s) {
    let arr = s.split('');
    let answer = [];
    // 한 번만 등장한 문자는 시작 순서와 끝 순서가 동일함
    arr.forEach((v)=>{
        if(s.indexOf(v) === s.lastIndexOf(v)){
            answer.push(v);
        }
    })
    return answer.sort().join('');
}