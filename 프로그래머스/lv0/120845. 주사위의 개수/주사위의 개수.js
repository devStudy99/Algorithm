function solution(box, n) {
    return box.reduce((a, v) => a * ~~(v/n) , 1)
}