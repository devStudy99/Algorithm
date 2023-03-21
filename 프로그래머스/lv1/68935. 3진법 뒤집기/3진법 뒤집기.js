function solution(n) {
    
//     let str = "";

//     while(n>0){
//         str += n%3;
//         n = ~~(n/3);
//     }
    
//     let cnt = 0;
//     let sum = 0;
    
//     while(cnt<str.length){
//         sum += str[str.length-1-cnt] * 3 ** cnt;
//         cnt++;
//     }
    
//     console.log(parseInt([...n.toString(3)].reverse().join(""), 3));
    
//     return sum;

    return parseInt([...n.toString(3)].reverse().join(""), 3);

}