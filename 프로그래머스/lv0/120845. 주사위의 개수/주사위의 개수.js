function solution(box, n) {
    let arr = box.map(length=>~~(length/n));
    return arr[0]*arr[1]*arr[2];
}