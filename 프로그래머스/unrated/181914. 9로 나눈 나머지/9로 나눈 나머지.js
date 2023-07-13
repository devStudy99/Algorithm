function solution(number) {
  const sum = Array.from(number.toString()).reduce((acc, digit) => acc + parseInt(digit), 0);
  return sum % 9;
}
