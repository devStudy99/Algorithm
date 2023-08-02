function solution(n) {
    let collatzSequence = [];

    while (n !== 1) {
        collatzSequence.push(n);

        if (n % 2 === 0) {
            n /= 2;
        } else {
            n = n * 3 + 1;
        }
    }

    collatzSequence.push(1);
    
    return collatzSequence;
}
