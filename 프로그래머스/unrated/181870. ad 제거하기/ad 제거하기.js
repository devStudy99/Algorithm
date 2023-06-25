function solution(strArr) {
  const result = strArr.filter(str => !str.includes('ad'));
  return result;
}