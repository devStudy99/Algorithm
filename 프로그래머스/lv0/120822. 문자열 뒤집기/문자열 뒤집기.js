function solution(my_string) {
    // 1. 문자를 여러 개의 문자열로 나누기
    const splitStr = my_string.split('');
    // 2. 배열 순서 뒤집기
    const reverseStr = splitStr.reverse(); 
    // 3. 모든 요소를 문자열로 결합하기
    const joinStr = reverseStr.join('');

    return joinStr;

}