function solution(rsp) {
    const win = {
        2: 0,
        0: 5,
        5: 2
    }
    // return [...rsp].map((item)=>win[item]).join('');
    return rsp.split('').map((item)=>win[item]).join('');
}