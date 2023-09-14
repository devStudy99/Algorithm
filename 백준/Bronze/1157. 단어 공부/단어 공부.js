function sol(str) {
  str = str.toUpperCase().split("").sort().join("");
  const arr = new Array(26).fill(0);
  let max = Number.MIN_SAFE_INTEGER;
  let maxIdx = -1;

  for (let x of str) {
    const idx = x.charCodeAt() - 65;
    arr[idx]++;
    if (max < arr[idx]) {
      max = arr[idx];
      maxIdx = idx;
    }
  }

  const lastIdx = arr.lastIndexOf(max);
  if (lastIdx !== maxIdx) return "?";
  return String.fromCharCode(maxIdx + 65);
}

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(line));
  })
  .on("close", () => {
    process.exit();
  });