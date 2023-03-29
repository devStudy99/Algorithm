function solution(babbling) {

    const pron = ["aya", "ye", "woo", "ma"];
    let answer = 0;

    for(let i=0; i<babbling.length; i++){
        
        let before = "";
        let temp = "";
        let twice = false;
        
        for(let j=0; j<babbling[i].length; j++){
            temp += babbling[i][j];
            if(before === temp){
                twice = true;
                temp = "";
            }
            if(pron.includes(temp)){
                before = temp;
                temp = "";
            }
        }

        if(temp === "" && twice === false) answer++;
  
    }
 
    return answer;
}