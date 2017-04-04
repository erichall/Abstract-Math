var n = process.argv[2]

//Only calculating for Z_n groups
function getPrimitiveElement(n) {
    for(j = 2; j < n; j++) {
      var elems = []
      for(i = 1; i <= n; i++) {
        let pow = (j * i) % n
          pow == 1 && i == n? console.log(`${j}^${i} mod ${n} = ${pow}`) : true
        elems.indexOf(pow) < 0 ? elems.push(pow) : true
      }
      elems.length == n   ? console.log(`generator: ${j}`, elems.length) : true
    }
    //elems.sort(function(a,b){ return a-b})

    //ip link set wlan0 down
    return elems
}

getPrimitiveElement(n)
