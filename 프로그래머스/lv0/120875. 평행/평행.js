const getInclination = ([x1, y1], [x2, y2]) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return dy / dx;
};

function solution(dots) {
    
    if (getInclination(dots[0], dots[1]) === getInclination(dots[2], dots[3])) {
        return 1;
    } else if (getInclination(dots[0], dots[2]) === getInclination(dots[1], dots[3])) {
        return 1;
    } else if (getInclination(dots[0], dots[3]) === getInclination(dots[1], dots[2])) {
        return 1;
    } else {
        return 0;
    }

}
