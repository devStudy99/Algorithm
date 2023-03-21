function solution(spell, dic) {
    
    let answer = 2;
    
    const str1 = spell.sort().join('');
    
    dic.map(v=>{
        const str2 = v.split('').sort().join('');
        if(str1 === str2){
            answer = 1;
        }
    })
    
    return answer;
}