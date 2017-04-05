var codes = (process.argv[2]).split(',')

var ones = []
for (i = 0; i < codes.length; i++) {
  ones.push(Array.from(codes[i]).reduce(function(ones,v){
    v == '1' ? ones++ : ones
    return ones
  },0))

}
console.log(`min dist : ${Math.min( ...ones.filter(function(v){return v > 0}))}`)
