function solution(keyinput, board) {
    let xLength = ~~(board[0]/2);
    let yLength = ~~(board[1]/2);
    
    let xCnt = 0;
    let yCnt = 0;
    
    
    keyinput.map(v => {
        if(v === "up" || v === "down"){
            if(Math.abs(yCnt) < yLength){
                v === "up" ? yCnt++ : yCnt--;
            } else if(yCnt === yLength && v === "down"){
                yCnt--;
            } else if(yCnt === -yLength && v === "up"){
                yCnt++;
            }
        } else if(v === "right" || v === "left"){
            if(Math.abs(xCnt) < xLength){
                v === "right" ? xCnt++ : xCnt--;
            } else if(xCnt === xLength && v === "left"){
                xCnt--;
            } else if(xCnt === -xLength && v === "right"){
                xCnt++;
            }
        }
    })
    
    function xyCnt(cnt, length){
        if(cnt < 0){
            if(Math.abs(cnt) > length){
                cnt = - + length;
            }
        } else if(cnt > 0){
            if(cnt > length){
                cnt = length;
            }
        }
        return cnt;
    }

    return [xyCnt(xCnt, xLength), xyCnt(yCnt, yLength)];
    
}
