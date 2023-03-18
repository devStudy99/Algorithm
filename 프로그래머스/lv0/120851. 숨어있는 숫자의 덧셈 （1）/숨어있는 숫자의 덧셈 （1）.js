function solution(my_string) {
    let sum = 0;
    my_string.replace(/[a-zA-Z]/g, '').split('').map(num=>sum += +num);
    return sum;
}