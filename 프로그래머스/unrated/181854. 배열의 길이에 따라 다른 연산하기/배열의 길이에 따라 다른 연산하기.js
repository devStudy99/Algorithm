function solution(arr, n) {
    var answer = [];
    var length = arr.length;
    
    for (var i = 0; i < length; i++) {
        if (length % 2 === 0 && i % 2 === 1) {
            answer.push(arr[i] + n);
        } else if (length % 2 === 1 && i % 2 === 0) {
            answer.push(arr[i] + n);
        } else {
            answer.push(arr[i]);
        }
    }
    
    return answer;
}
