function solution(numbers) {
    for(let i = 0; i < numbers.length; i++){
        numbers.splice(i, 1, numbers[i]*2);
    }
    return numbers;
}