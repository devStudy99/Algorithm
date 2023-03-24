function solution(babbling) {
    
    const pron = ["aya", "ye", "woo", "ma"];
    
    let cnt = 0;
    
    babbling.map(v1=>{

        pron.map(v2=>{
            v1 = v1.replace(v2, ' ');
        })
        if(v1.match(/[a-z]/g) === null) cnt++;

    })
    
    return cnt;

}