function solution(my_string, s, e) {
  if (s < 0 || e >= my_string.length || s > e) {
    return "Invalid index range";
  }

  const substring = my_string.split("").slice(s, e + 1);

  const reversedSubstring = substring.reverse().join("");

  return my_string.slice(0, s) + reversedSubstring + my_string.slice(e + 1);
}