const getInclination = (arr1, arr2) => {
  return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
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
