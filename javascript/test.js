function test () {
  return 'test'
}

Object.defineProperty(test, 't', {
  get: function () {
    return 't'
  }
})

console.log(test.t)
console.log(123)