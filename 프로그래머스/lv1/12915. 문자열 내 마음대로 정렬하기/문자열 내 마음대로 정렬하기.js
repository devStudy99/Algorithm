function solution(strings, n) {
   
//     strings.sort((a,b)=>{
        
//         // 만약 a[n]이랑 b[n]이랑 같으면 사전순 같지 않을 경우 n번째 글자 기준 사전순    
//         if(a[n] === b[n]){
//             if(a > b) return 1;
//             if(a < b) return -1;
//             return 0;
//         }
        
//         return a[n].charCodeAt(0) - b[n].charCodeAt(0);
        
//     })
    
//     return strings;

    // a.localeCompare(b) => 오름차순 / b.localeCompare(a) => 내림차순 
    return strings.sort((a, b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));

    
}
