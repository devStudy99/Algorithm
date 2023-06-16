function solution(my_string, is_suffix) {
    var suffixLength = is_suffix.length;
    var myStringLength = my_string.length;
    if (suffixLength > myStringLength) {
        return 0; 
    }
    var suffix = my_string.substring(myStringLength - suffixLength);
    if (suffix === is_suffix) {
        return 1; 
    } else {
        return 0; 
    }
}