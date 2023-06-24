function solution(str1, str2) {
  let result = '';
  let length = Math.max(str1.length, str2.length);

  for (let i = 0; i < length; i++) {
    if (i < str1.length) {
      result += str1[i];
    }
    if (i < str2.length) {
      result += str2[i];
    }
  }

  return result;
}