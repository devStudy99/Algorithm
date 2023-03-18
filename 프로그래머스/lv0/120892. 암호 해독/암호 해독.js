function solution(cipher, code) {
    let password = [];
    cipher.split('').map((str, i)=>{
        if((i+1) % code === 0) password.push(str);
    })
    return password.join('');
}