function solution(my_string) {
  const suffixes = [];
  const length = my_string.length;

  for (let i = 0; i < length; i++) {
    suffixes.push(my_string.slice(i));
  }

  suffixes.sort();

  return suffixes;
}
