var p = process.argv[2]
var q = process.argv[3]
var e = process.argv[4]
var x = process.argv[5]
var n = p*q
var m = (p-1)*(q-1)

var bigInt = require("big-integer")
// hitta e
function find_e() {
  for(i = 3; i < Math.sqrt(m); i++) {
    if(gcd(m,i) == 1) return i
  }
}

function gcd(a,b) {
  if (a == 0) return b
  return gcd(b,a % b)
}

/**
* calculates ax + by = gcd(a,b)
* [a,b,c] = gcd_reverse(352,15) =>  352 * a + 15 * b = c
**/
function gcd_reverse(a,b) {
  if(b == 0){
    return [1,0,a]}
  else {
    tmp = gcd_reverse(b, a % b)
    x1 = tmp[0]
    y = tmp[1]
    d = tmp[2]
    return [y,x1-y*Math.floor(a/b),d]
  }
}
function encrypt(x) {
  return bigInt(x).modPow(e,n)
}
function decrypt(x) {
  return bigInt(x).modPow(d,n)
}

var arr = gcd_reverse(m,e)
arr = arr.map(function(v){v < 0 ? v += m : v; return v})

var d = arr[1]
var enc = encrypt(x)
var dec = decrypt(enc)
console.log(`encrypting ${x} -> ${enc} decrypting ${enc} -> ${dec}`)
