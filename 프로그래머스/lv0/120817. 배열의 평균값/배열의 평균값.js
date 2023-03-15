function solution(numbers) {
    let cnt = 0;
    let sum = 0;
    while(cnt < numbers.length){
        sum += numbers[cnt];
        cnt++;
    }
    return sum/numbers.length;
}