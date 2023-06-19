function solution(arr) {
    const answer = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        for (let j = 0; j < element; j++) {
            answer.push(element);
        }
    }
    return answer;
}