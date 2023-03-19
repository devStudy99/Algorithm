function solution(s1, s2) {
    let cnt = 0;
    s1.map(val => {
        if(s2.indexOf(val) !== -1){
            cnt++;
        }
    })
    return cnt;

}