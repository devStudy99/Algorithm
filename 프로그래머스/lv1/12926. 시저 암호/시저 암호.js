function solution(s, n) {
    
    let arr = s.split('');
    
    let newArr = arr.map(v=>{
        if(v.match(/[a-z]/g)){
            return v.charCodeAt(0)+n > 122 ? v = v.charCodeAt(0)+n - 26 : v.charCodeAt(0)+n;
        }
        if(v.match(/[A-Z]/g)){
            return v.charCodeAt(0)+n > 90 ? v = v.charCodeAt(0)+n - 26 : v.charCodeAt(0)+n;
        }
        return v.charCodeAt(0);
    })

    return newArr.map(v=>String.fromCharCode(v)).join("");

}

