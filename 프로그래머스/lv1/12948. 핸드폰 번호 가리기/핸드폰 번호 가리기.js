function solution(phone_number) {
    // let str = "";
    // for(let i=0; i<phone_number.length-4; i++){
    //     str += "*";
    // }
    // for(let i=4; i>=1; i--){
    //     str += phone_number[phone_number.length-i];
    // }
    // return str;
    
    const str = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
    return str;
 
}