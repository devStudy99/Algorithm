function solution(my_string, n) {
    let answer = '';
    const splitStr = my_string.split('');
    for(let i=0; i<splitStr.length; i++){
        for(let j=0; j<n; j++){
         answer += splitStr[i];   
        }
    }
    return answer;
}