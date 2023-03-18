function solution(my_string) {
    let vowels = /[aeiou]+/g;
    return my_string.replace(vowels, "");
    
}