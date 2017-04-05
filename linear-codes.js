/**
  Check if code is linear
  A code C in V^n is linear iff
    (i) a,b in C then a+b (bitwise) % 2 is in C
    (ii) C is a subgroup of V^n
**/

//bugs in the masses, why? because shitty code
var codes = (process.argv[2]).split(',')
var clen = codes[0].length

codes = codes.map(parseInteger)
var linear = true
for(i = 0; i < codes.length && linear; i++) {
  for(j = i+1; j < codes.length && linear; j++) {
    var diff = Array.from((codes[i] + codes[j]).toString(2))
    var pad = Array.from(Array(clen+1 - diff.length).join('0'))
    var cheatandugly = parseInteger(pad.concat(diff).reverse().slice(0,clen).reverse().join(''))
    console.log(cheatandugly.toString(2),codes[i].toString(2),codes[j].toString(2), diff ,pad)
    if(codes.indexOf(cheatandugly) == -1  ){
      linear = false ;break
    }
  }
}
console.log(!linear ? 'not linear' : 'linear')
function parseInteger(v) {
  return parseInt(v,2)
}
