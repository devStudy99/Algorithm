function solution(array) {
    array.sort((a,b)=>a-b);
    const cntrlOrder = parseInt(array.length/2);
    const answer = array[cntrlOrder];
    return answer;
}