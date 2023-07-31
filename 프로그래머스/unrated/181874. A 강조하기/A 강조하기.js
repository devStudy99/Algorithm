function solution(myString) {
    let result = '';
    for (let i = 0; i < myString.length; i++) {
        if (myString[i] === 'a') {
            result += 'A';
        } else if (myString[i] >= 'A' && myString[i] <= 'Z') {
            if (myString[i] !== 'A') {
                result += myString[i].toLowerCase();
            } else {
                result += myString[i];
            }
        } else {
            result += myString[i];
        }
    }
    return result;
}
