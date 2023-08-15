function solution(arr, queries) {
    let result = [];

    for (let query of queries) {
        let [s, e, k] = query; 
        let minVal = Infinity; 

        for (let i = s; i <= e; i++) {
            if (arr[i] > k && arr[i] < minVal) {
                minVal = arr[i];
            }
        }

        if (minVal === Infinity) {
            result.push(-1);
        } else { 
            result.push(minVal);
        }
    }

    return result;
}
