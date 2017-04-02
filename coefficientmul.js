//var assert = require('assert')
var chai = require('chai')
var assert = chai.assert

function pad(a,b) {
  return b.concat(Array(a.length-b.length).fill(0))
}

function coef(a,b,r) {
  let m = a.length + b.length
  var prod = new Array(m-1).fill(0)
  for(var i = 0 ; i < a.length; i++){
    for(var j = 0; j < b.length; j++) {
      prod[i+j] += (a[i] * b[j])
    }
  }
  return prod.map(function(v){return v % r})
}

describe('coefs', function() {
  it('a*b = ', function() {
    assert.deepEqual(coef([1,2],[1,2],10),[1,4,4])
    assert.deepEqual(coef([1,2,2],[2,1],3),[2,2,0,2])
  })
})

describe('Array', function() {
  it('Should be equal length', function() {
    assert.lengthOf(pad([1,2,3,4],[1,2,3,4]),4)

  })
  it('Pad should be equal', function() {
    var arr = pad([1,2,3,4],[1,2]).slice(2,4)
    assert.lengthOf(arr, 2)
    assert.equal(arr.reduce(function(sum,v){return sum +=v },0),0)
  })
})
