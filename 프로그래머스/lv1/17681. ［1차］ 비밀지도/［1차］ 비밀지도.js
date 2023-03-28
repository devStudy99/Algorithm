function solution(n, arr1, arr2) {
//     const temp1 = arr1.map(v=>{
//         return v.toString(2).padStart(n, 0);
//     })
//     const temp2 = arr2.map(v=>{
//         return v.toString(2).padStart(n, 0);
//     })

//     let answer = [];
//     let str = "";
    
//     for(let i=0; i<temp1.length; i++){
//         str += Number(temp1[i])+Number(temp2[i]);
//         answer.push(str);
//         str = "";
//     }
    
//     answer.filter((v, i) =>{
//         answer[i] = v.padStart(n, 0).replace(/0/g, ' ');
//         answer[i] = answer[i].replace(/[1-9]/g, '#');
//     })
    
//     return answer;
    
    // 하나라도 1이 있으면 1반환 아니면 0반환 -> 앞에 빈공간 0으로 채우기 -> 0인값만 ''해주고 1인값은 '#'해주기
    return arr1.map((a,i)=>(a|arr2[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))
}