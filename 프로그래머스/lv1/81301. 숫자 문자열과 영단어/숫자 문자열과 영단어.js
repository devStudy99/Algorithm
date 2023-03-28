function solution(s) {
//     const word = {
//         zero: 0,
//         one: 1,
//         two: 2,
//         three: 3,
//         four: 4,
//         five: 5,
//         six: 6,
//         seven: 7,
//         eight: 8,
//         nine: 9
//     }
    
//     let str = "";
//     let answer = "";
    
//     for(let i=0; i<s.length; i++){
//         // 숫자면 바로 추가
//         if((/\d/).test(s[i])){
//             answer += s[i];
//         } else{
//             str += s[i];
//             // 해당하는 값이 있으면 추가
//             if(word[str] !== undefined){
//                 answer += word[str];
//                 str = "";
//             }
//         }
//     }
    
//     return +answer;
    
    const word = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for(let i=0; i<=9; i++){
        const regex = new RegExp(`${word[i]}`, 'g');
        s = s.replace(regex, i);
    }    

    return +s;
}