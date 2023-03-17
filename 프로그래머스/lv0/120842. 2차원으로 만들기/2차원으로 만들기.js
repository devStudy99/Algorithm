function solution(num_list, n) {
    let result = [];
    let arr = [];
    for(let i=0; i<num_list.length; i++){
        arr.push(num_list[i]);
        if(arr.length === n){
            result.push(arr);
            arr = [];
        }
    }
    return result;
}

