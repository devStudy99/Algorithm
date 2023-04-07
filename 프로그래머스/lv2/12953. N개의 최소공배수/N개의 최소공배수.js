function solution(arr) {
    return arr.reduce((a, b) =>{
        return a * b / getGCD(a, b);
    })
}

//최대 공약수를 구하는 함수
function getGCD(a, b){
    if(a % b == 0) return b;
    return getGCD(b, a % b);
}