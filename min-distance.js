/**
  input: array of codes on the format : 0000,1111,0101
**/
var codes = (process.argv[2]).split(',')
codes = codes.map(parseInteger)

var min = Number.MAX_SAFE_INTEGER

for(i = 0; i < codes.length; i++) {
  for(j = i+1; j < codes.length; j++) {
    var diff = Array.from((codes[i]^codes[j]).toString(2)).reduce(function(acc,val){
      (val > 0 ? acc += 1 : acc); return acc },0)
    diff < min ? min = diff : true
  }
}

console.log(min)

function parseInteger(v) {
  return parseInt(v,2)
}
