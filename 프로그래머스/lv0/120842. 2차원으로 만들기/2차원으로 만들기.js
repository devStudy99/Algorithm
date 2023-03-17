function solution(num_list, n) {
    // let result = [];
    // let tempArray = [];
    // for(let i=0; i<num_list.length; i++){
    //     tempArray.push(num_list[i]);
    //     if(tempArray.length === n){
    //         result.push(tempArray);
    //         tempArray = [];
    //     }
    // }
    // return result;
    let answer = [];

    while(num_list.length) {
        answer.push(num_list.splice(0,n));
    }

    return answer;
}

