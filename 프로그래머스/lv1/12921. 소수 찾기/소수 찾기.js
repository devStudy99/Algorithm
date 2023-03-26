function solution(n) {
  // 2부터 n까지의 숫자 배열 만들기
  const numbers = Array(n+1).fill(true);
  // 에라토스테네스의 체 알고리즘 적용
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (numbers[i]) {
      for (let j = i*i; j <= n; j += i) {
        numbers[j] = false;
      }
    }
  }
  // 소수의 개수 구하기
  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (numbers[i]) {
      count++;
    }
  }
  return count;
}