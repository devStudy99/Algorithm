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

    // 배열의 길이가 0이 될 때가지 반복문 돌려야 함.
    // while 조건문에 배열의 길이를 넣으면 0이 될 때 반복문이 종료됨.
    while(num_list.length) {
        answer.push(num_list.splice(0,n));
    }

    return answer;
}

