function solution(arr, delete_list) {
  const deleteSet = new Set(delete_list);

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!deleteSet.has(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}