function solution(arr) {
    let len = arr.length;

    let powerOfTwo = 1;

    while (powerOfTwo < len) {
        powerOfTwo *= 2;
    }

    while (len < powerOfTwo) {
        arr.push(0);
        len++;
    }

    return arr;
}
