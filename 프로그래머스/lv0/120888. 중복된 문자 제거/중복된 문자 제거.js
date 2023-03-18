function solution(my_string) {
    const str = new Set(my_string);
    
    return [...str].join('');
}