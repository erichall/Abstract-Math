var generator = process.argv[2]
var base = parseInt(process.argv[3])

function multiplication_generator(generator,base) {
  return Array(base).fill(0).map(function(val,i){
    //console.log(Math.pow(generator,i) % (base), generator, i, base)
    return Math.pow(generator,i)% (base)
  }).filter(function(e,i,self){
        return self.indexOf(e) === i
      })
}

num = multiplication_generator(generator,base)
console.log(`<${generator}> = {`,num,"}", num.length)
