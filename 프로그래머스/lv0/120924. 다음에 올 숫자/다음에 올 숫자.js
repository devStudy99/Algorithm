function solution(common) {
    const length = common.length-1;
    
    if(common[length]%common[length-1] === 0 && common[length-1]%common[length-2] === 0){
        return common[length]/common[length-1] * common[length];
    } else {
        return common[length]-common[length-1] + common[length];
    }

}