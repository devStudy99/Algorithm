function solution(s1, s2) {
    // let cnt = 0;
    // s1.map(v => {
    //     if(s2.indexOf(v) !== -1){
    //         cnt++;
    //     }
    // })
    // return cnt;
    
    const arr = s1.filter((v) => s2.includes(v));
    return arr.length;

}