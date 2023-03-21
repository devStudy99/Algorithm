function solution(chicken) {
    
    let coupon = chicken;
    let service = ~~(coupon/10);
    let restCoupon = coupon%10 + service;
    let answer = service;
    
    while(restCoupon >= 10){
        answer += ~~(restCoupon/10);
        restCoupon = restCoupon%10 + ~~(restCoupon/10);
    }
    
    return answer;
}