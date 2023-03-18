function solution(my_string, num1, num2) {
    const first = my_string[num1];
    const second = my_string[num2];
    
    let answer = my_string.split('');
    
    // answer.splice(num1, 1, second);
    // answer.splice(num2, 1, first);
    
    answer[num1] = second;
    answer[num2] = first;
    
    return answer.join('');
}