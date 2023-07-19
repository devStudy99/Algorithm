function solution(numLog) {
  let num = numLog[0];
  let inputStr = ""; 
    
  for (let i = 1; i < numLog.length; i++) {
    const diff = numLog[i] - numLog[i - 1];

    if (diff === 1) {
      inputStr += "w";
    } else if (diff === -1) {
      inputStr += "s";
    } else if (diff === 10) {
      inputStr += "d";
    } else if (diff === -10) {
      inputStr += "a";
    }
    
    num = numLog[i];
  }

  return inputStr;
}