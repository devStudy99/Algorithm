function solution(a, b, c) {
    let sum = a + b + c;
    let sumOfSquares = Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2);
    let sumOfCubes = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3);

    if (a === b && b === c) {
        return sum * sumOfSquares * sumOfCubes;
    }
    
    else if (a === b || a === c || b === c){
        return sum * sumOfSquares;
    }

   else {
       return sum;
   }
}
