function solution(a, b) {
  const concatenation = parseInt(String(a) + String(b)); 
  const multiplication = 2 * a * b; 

  if (concatenation >= multiplication) {
    return concatenation;
  } else {
    return multiplication;
  }
}