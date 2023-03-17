function solution(hp) {
    let rJang = hp%5;
    let rByeong = rJang%3;
    
    let dJang = Math.floor(hp/5);
    let dByeong = Math.floor(rJang/3);
    
    if(rJang === 0){
        return dJang;
    }
    if(rByeong === 0){
        return dJang + dByeong;
    }
    return dJang + dByeong + rByeong;
}