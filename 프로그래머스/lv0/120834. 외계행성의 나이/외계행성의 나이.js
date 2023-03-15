function solution(age) {
    
//     let alphabet = '';
    
//     let ageArr = age.toString().split(''); 
    
//     let arrLength = ageArr.length;
    
//     const alObj = {
//         0: "a",
//         1: "b",
//         2: "c",
//         3: "d",
//         4: "e",
//         5: "f",
//         6: "g",
//         7: "h",
//         8: "i",
//         9: "j"
//     }
    
//     for(let i=0; i<arrLength; i++){
//         console.log(i);
//         for(const key in alObj){
//          if(key == ageArr[0]){
//              alphabet += alObj[key];
//              ageArr.shift();
//          }   
//         }
//     }

//     return alphabet;
    
    let answer = '';
    
    const stringAge = String(age);
    
    let cnt = 0;
    while(cnt < stringAge.length){
        answer = answer + String.fromCharCode(stringAge[cnt].charCodeAt(0) + 49);
        cnt++;
    }
    return answer;
}