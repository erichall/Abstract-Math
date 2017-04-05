var n = process.argv[2]

// calculating for Z_n groups
function getPrimitiveElement(n) {
    for(j = 2; j < n; j++) {
      var elems = []
      if(j == 5) {
      for(i = 1; i <= n; i++) {
        let pow = Math.pow(j,i) % n
        console.log(pow, elems.indexOf(pow) < 0, elems.length)
      //  pow == 1 && i == n ? console.log(`${j}^${i} mod ${n} = ${pow}`) : true
        elems.indexOf(pow) < 0 ? elems.push(pow) : true
      }
      console.log(elems.length)
      elems.length == n-1   ? console.log(`generator: ${j}`, elems.length) : true
    }
  }
    //elems.sort(function(a,b){ return a-b})

    //ip link set wlan0 down
    return elems
}

getPrimitiveElement(n)
