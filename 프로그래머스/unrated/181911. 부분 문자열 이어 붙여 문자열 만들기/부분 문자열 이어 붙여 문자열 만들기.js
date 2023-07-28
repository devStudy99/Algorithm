function solution(my_strings, parts) {
    let result = '';
    for (let i = 0; i < my_strings.length; i++) {
        let part = my_strings[i].slice(parts[i][0], parts[i][1] + 1);
        result += part;
    }
    return result;
}