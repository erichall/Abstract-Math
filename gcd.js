

var a = process.argv[2]
var b = process.argv[3]


function gcd(a,b) {
  if (b == 0) return a
  return gcd(b, a % b)
}

console.log(gcd(a,b))
