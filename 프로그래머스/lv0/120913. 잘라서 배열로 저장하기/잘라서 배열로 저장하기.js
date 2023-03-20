function solution(my_str, n) {
    let strArr = my_str.split('');
    let length = strArr.length;
    let str = "";
    let cnt = 0;
    let answer = [];

    while(strArr.length){
        if(cnt===n){
            answer.push(str);
            str = "";
            cnt = 0;
        }
        if(strArr.length === length%n){
            answer.push(strArr.join(''));
            return answer;
        }
        str += strArr[0];
        if(strArr.length === 1){
            answer.push(str);
            return answer;
        }
        strArr.shift();
        cnt++;        
    }
}