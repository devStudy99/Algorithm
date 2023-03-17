function solution(numbers, direction) {
    // if(direction === "right"){
    //     numbers.unshift(numbers[numbers.length-1]);
    //     numbers.pop();
    // } else {
    //     numbers.push(numbers[0]);
    //     numbers.shift();
    // }
    
    // 마지막 요소 제거한걸 첫 요소로 추가
    // 첫 요소 제거한걸 마지막 요소로 추가
    direction === 'right' ? numbers.unshift(numbers.pop()) : numbers.push(numbers.shift());

    return numbers;
}