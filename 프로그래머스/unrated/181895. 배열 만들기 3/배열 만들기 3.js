function solution(arr, intervals) {
  const firstIntervalStart = intervals[0][0];
  const firstIntervalEnd = intervals[0][1];

  const secondIntervalStart = intervals[1][0];
  const secondIntervalEnd = intervals[1][1];

  const firstSubArray = arr.slice(firstIntervalStart, firstIntervalEnd + 1);
  const secondSubArray = arr.slice(secondIntervalStart, secondIntervalEnd + 1);

  return firstSubArray.concat(secondSubArray);
}
