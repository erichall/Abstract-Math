var generator = process.argv[2]
var base = parseInt(process.argv[3])

function multiplication_generator(arg) {
  return Array(base).fill(0).map(function(val,i){
    //console.log(Math.pow(generator,i) % (base), generator, i, base)
    return Math.pow(generator,i)% (base)
  }).filter(function(e,i,self){
        return self.indexOf(e) === i
      })
}

function iterative_mulitplication_generator(base) {
  var ans = []
  for(var i = 1; i < base; i++) {
    ans.push(Math.pow(base,i) % base)
  }
  return ans
}

function powers(order) {
  for(var i = 2; i < order; i++){
    process.stdout.write(i + ":\t");
    var tmp = []
    for(var j = 0; j < order; j++) {
        //process.stdout.write(`${i}^${j}=` + Math.pow(i,j) % order+ ", ")
        tmp.push(Math.pow(i,j) % order)
    }
    //console.log(tmp)
  }
}

function gcd(a,b) {
  if (b == 0) return a
  return gcd(b, a % b)
}

function lcm(a,b) {
  return (a*b)/gcd(a,b)
}

function euler(n) {
  var ans = []
  for(var i = 1; i <= n; i++) {
    if(gcd(n,i) === 1) ans.push(i)
  }
  return ans
}

function addative_order(elements,base) {
  elements.forEach(function(elem) {
    for(var i = 1; i <= base; i++) {
      if((elem * i) % base == 0){
        process.stdout.write(`o(${elem}) = ${i}\n`)
        return
      }
    }
    return i
  })
}

//console.log(euler(base))
console.log(gcd(generator,base))
//console.log(multiplication_generator())
//console.log(`gcd(${base},${generator})=`, gcd(base,generator))
//console.log(multiplication_generator(generator))
//powers(base)

//addative_order([1,2,3,4,5,6,7,8,9], 10)
//console.log(lcm(40,10))
