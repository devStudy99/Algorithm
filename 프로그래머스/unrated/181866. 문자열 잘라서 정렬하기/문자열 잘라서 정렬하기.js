function solution(myString) {
  const arr = myString.split("x");
  const sortedArr = arr.filter(str => str !== "").sort();
  return sortedArr;
}