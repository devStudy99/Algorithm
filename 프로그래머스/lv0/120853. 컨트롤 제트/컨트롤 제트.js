function solution(s) {
    let sum = 0;
    let arr = s.split(" ");
    arr.map((num, i)=>{
        if(num==="Z"){ 
            sum -= +arr[i-1];
        } else{
            sum += +num;
        }
    })
    return sum;
}