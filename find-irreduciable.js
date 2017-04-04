var pol = process.argv[2]
var mod = process.argv[3]
/**
* [a,b,c,d,...] represent a polynomial with coefficients a,b,c,d
* eg [a,b,c] = ax^2 + bx + c
**/

function findlinearfactors(pol,mod) {
  var roots = []
  // j is the possible root
  for(var j = 0; j < mod; j++) {
    let val = pol.reduce(function(ans, cof, i){
      return ans += (cof * Math.pow(j,parseInt(pol.length-1) - i)) % mod
    },0)
    val % mod === 0 ? roots.push(j) : true
  }
  return roots.length === 0 ? 'No linear roots' : `Roots: ${roots}`
}


//why bother validate input duuh
console.log(findlinearfactors(JSON.parse('[' + pol + ']'), parseInt(mod)))
