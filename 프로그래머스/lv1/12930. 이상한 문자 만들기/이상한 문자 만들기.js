function solution(s) {
    let arr = [...s];
    let str = "";
    let cnt = 0;
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== " "){
            if(cnt%2 === 0){
                str += arr[i].toUpperCase();
            }else{
                str += arr[i].toLowerCase();
            }
            cnt++;
        }else{
            str += arr[i];
            cnt = 0;
        }
    }
    return str;
    
}

