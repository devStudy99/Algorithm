function solution(my_string) {
    let arr = my_string.split(" ");
    let sum = Number(arr[0]);

    for(let i=1; i<arr.length; i+=2){
        console.log(i);
        if(arr[i]==="+"){
            sum += Number(arr[i+1]);
        }else{
            sum -= Number(arr[i+1]);
        }
    }
    
    return sum;

}