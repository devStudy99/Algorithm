function solution(my_string, m, c) {
  let result = '';
  const stringLength = my_string.length;

  for (let i = c - 1; i < stringLength; i += m) {
    result += my_string.charAt(i);
  }

  return result;
}