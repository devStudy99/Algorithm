function solution(myString, pat) {
  let result = '';

  for (let i = 0; i < myString.length; i++) {
    let substring = '';
    for (let j = i; j < myString.length; j++) {
      substring += myString[j];

      if (substring.endsWith(pat) && substring.length > result.length) {
        result = substring;
      }
    }
  }

  return result;
}