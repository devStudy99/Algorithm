function solution(my_string) {
    
    const arr = my_string.replaceAll(/[a-zA-z]/g, " ").split(" ");
    
    return arr.filter(v=>v!==" ").reduce((acc, cur)=>Number(acc)+Number(cur),0);


    
}