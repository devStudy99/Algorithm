function solution(s) {
    
    let tmp = s.split(' ');

    for(let i=0; i<tmp.length; i++){
        if(tmp[i] !== ''){
            if(tmp[i][0].match(/^[a-zA-Z]/) === null){
                tmp[i] = tmp[i].toLowerCase();
            }else{
                tmp[i] = tmp[i][0].toUpperCase() + tmp[i].slice(1).toLowerCase();
            }
        }
    }
    
    return tmp.join(' ');
    
}