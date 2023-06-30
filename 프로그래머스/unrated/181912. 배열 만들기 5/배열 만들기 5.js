function solution(intStrs, k, s, l) {
  const result = [];
  for (let i = 0; i < intStrs.length; i++) {
    const substring = intStrs[i].substr(s, l);
    const num = parseInt(substring);
    if (num > k) {
      result.push(num);
    }
  }
  return result;
}