function solution(array) {
    // let cnt = 0;
    // array.map(v1=>{
    //     String(v1).split('').map(v2=>{
    //      if(Number(v2)===7){
    //          cnt++;
    //      }   
    //     })
    // })
    // return cnt;
    return array.join('').split('').filter(v=>Number(v)===7).length;
}