function solution(num_list) {
    const newArr = [];
    for(let i = num_list.length-1; i >= 0; i--){
        newArr.push(num_list[i]);
    }
    return newArr;
}