function solution(myStr) {
    let splitArr = myStr.split(/[abc]/);

    let result = splitArr.filter(str => str.length > 0);

    if (result.length === 0) {
        return ["EMPTY"];
    }

    return result;
}
