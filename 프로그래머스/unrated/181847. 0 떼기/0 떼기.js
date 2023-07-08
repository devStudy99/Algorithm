function solution(n_str) {
  let index = 0;
  
  while (index < n_str.length && n_str.charAt(index) === '0') {
    index++;
  }
  
  return n_str.substring(index);
}