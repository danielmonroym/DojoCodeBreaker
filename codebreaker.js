
let number="";
function codebreaker(b) {
  let result = "";
  console.log(number,b);
  for (let i = 0; i < number.length; i++) {
  
    result = compare(number, b, i, result);
  }
  return result;
}
function compare(number, b, i, result) {
  return number.charAt(i) == b.charAt(i)
    ? "x" + result.slice(0)
    : number.includes(b.charAt(i))
    ? result + "_"
    : result;
}

function setSecret(a){
   number=a;
}

module.exports = {
  codebreaker,
  setSecret
};

