function solution(strArr) {
  const lengthMap = new Map();
  
  for (const str of strArr) {
    const length = str.length;
    if (!lengthMap.has(length)) {
      lengthMap.set(length, []);
    }
    lengthMap.get(length).push(str);
  }

  let maxGroupSize = 0;
  for (const group of lengthMap.values()) {
    const groupSize = group.length;
    if (groupSize > maxGroupSize) {
      maxGroupSize = groupSize;
    }
  }

  return maxGroupSize;
}