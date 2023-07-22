function solution(a, b) {
  const strA = a.toString();
  const strB = b.toString();
  
  const ab = strA + strB;
  const ba = strB + strA;
  
  if (ab > ba) {
    return Number(ab); 
  } else {
    return Number(ba);
  }
}