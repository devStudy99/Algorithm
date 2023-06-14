function solution(myString, pat) {
    var replacedString = myString.replace(/A/g, "X").replace(/B/g, "A").replace(/X/g, "B");
    var answer = replacedString.includes(pat) ? 1 : 0;
    return answer;
}