

var a = process.argv[2]
var b = process.argv[3]
var checkgroup = process.argv[4]
var n = process.argv[5]

function gcd(a,b) {
  if (b == 0) return a
  return gcd(b, a % b)
}

if(!checkgroup) {
  console.log(gcd(a,b))
}else {
  //find invertable elements in Zn
  var inverts = []
  for(var i = 1; i < n; i++) {
    if(gcd(n,i) == 1) {
      inverts.push(i)
    }
  }
  console.log(inverts.length === 0 ? 'No invertable elements' : inverts)
  
}
