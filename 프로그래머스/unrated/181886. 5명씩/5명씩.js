function solution(names) {
  const groups = [];
  let currentIndex = 0;

  while (currentIndex < names.length) {
    const group = names.slice(currentIndex, currentIndex + 5);
    groups.push(group[0]);
    currentIndex += 5;
  }

  return groups;
}