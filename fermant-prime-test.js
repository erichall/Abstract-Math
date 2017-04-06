var N = process.argv[2]
var bigInt = require("big-integer")
/**
  is N prime?
  test : b^(N-1) mod N = 1
  looping because making it statistical significatant that its a prime.
**/
function fermattest(N) {
  for(var i = 2; i < N; i++) {
    if(bigInt(i).modPow(N-1, N).value != 1)  return false
  }
  return true
}

console.log(fermattest(N))
