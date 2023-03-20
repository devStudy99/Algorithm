function solution(keyinput, board) {
//     let xLength = board[0]/2-1;
//     let yLength = board[1]/2-1;
    
//     let xCnt = 0;
//     let yCnt = 0;
    
    
//     keyinput.map(v => {
//         if(v === "up" || v === "down"){
//             if(Math.abs(yCnt) < yLength){
//                 v === "up" ? yCnt++ : yCnt--;
//             } else if(yCnt === yLength && v === "down"){
//                 yCnt--;
//             } else if(yCnt === -yLength && v === "up"){
//                 yCnt++;
//             }
//         } else if(v === "right" || v === "left"){
//             if(Math.abs(xCnt) < xLength){
//                 v === "right" ? xCnt++ : xCnt--;
//             } else if(xCnt === xLength && v === "left"){
//                 xCnt--;
//             } else if(xCnt === -xLength && v === "right"){
//                 xCnt++;
//             }
//         }
//     })
    
//     function xyCnt(cnt, length){
//         if(cnt < 0){
//             if(Math.abs(cnt) > length){
//                 cnt = - + length;
//             }
//         } else if(cnt > 0){
//             if(cnt > length){
//                 cnt = length;
//             }
//         }
//         return cnt;
//     }

//     return [xyCnt(xCnt, xLength), xyCnt(yCnt, yLength)];
    
    let answer = [0,0];
    
    // left와 down일 때는 -할거니까 -인 상태로 비교해야 됨
    keyinput.map(v=>{
        switch(v){
            case 'left': if (-answer[0] < board[0]/2-1) answer[0]--; break;
            case 'right': if (answer[0] < board[0]/2-1) answer[0]++; break;
            case 'up': if (answer[1] < board[1]/2-1) answer[1]++; break;
            case 'down': if (-answer[1] < board[1]/2-1) answer[1]--; break;
        }
    })

    return answer;
    
}
