function solution(arr1, arr2) {
    var sum1 = arr1.reduce((a, b) => a + b, 0); 
    var sum2 = arr2.reduce((a, b) => a + b, 0); 

    if (arr1.length !== arr2.length) {
        return arr1.length > arr2.length ? 1 : -1; 
    } else if (sum1 !== sum2) {
        return sum1 > sum2 ? 1 : -1;
    } else {
        return 0; 
    }
}