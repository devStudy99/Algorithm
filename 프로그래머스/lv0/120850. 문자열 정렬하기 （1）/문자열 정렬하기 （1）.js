function solution(my_string) {
    const str = my_string.replace(/[a-z]/g, '');
    // return Array.from(str, Number).sort((a,b)=>a-b);
    return str.split('').map(Number).sort((a,b)=>a-b);
}