function solution(balls, share) {
    return Math.round(factorial(balls)/(factorial(balls-share)*factorial(share)));
}

function factorial(num){
    let multi = 1;
    for(let i=1; i<=num; i++){
        multi *= i;
    }
    return multi;
}
