function solution(order) {
//     let cnt = 0;
//     String(order).split('').map(num=>{
//         if(Number(num) !== 0 && Number(num)%3 === 0){
//             cnt++;
//         }
//     });
//     return cnt;
    return (order+'').replace(/[0, 1, 2, 4, 5, 7, 8]/g, '').length;
}