function codebreaker(a, b) {
  let result = "";
  for (let i = 0; i < a.length; i++) {
    result = compare(a, b, i, result);
  }
  return result;
}
function compare(a, b, i, result) {
  return a.charAt(i) == b.charAt(i)
    ? "x" + result.slice(0)
    : a.includes(b.charAt(i))
    ? result + "_"
    : result;
}

module.exports.codebreaker = codebreaker;
