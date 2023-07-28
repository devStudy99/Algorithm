function solution(my_string) {
  const countArray = Array(52).fill(0); 

  for (let i = 0; i < my_string.length; i++) {
    const charCode = my_string.charCodeAt(i);
    let index;

        if (charCode >= 65 && charCode <= 90) { 
          index = charCode - 65;
    } else if (charCode >= 97 && charCode <= 122) { 
      index = charCode - 71; 
    } else {
      continue;
    }

    countArray[index]++; 
  }

  return countArray;
}
