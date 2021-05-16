// function init() {
//   var firstName = 'vaibhav'
//   function sayFirstName() {
//     console.log(firstName)
//   }
//   return sayFirstName
// }
// var res = init()
// res()

// var func = function () {
//   var a = 2
//   var set_a = function (newValue) {
//     a = newValue
//   }
//   var get_a = function () {
//     return a
//   }
//   return {
//     getA: get_a,
//     setA: set_a,
//   }
// }
// obj = func()
// console.log(obj.getA())
// obj.setA(20)
// console.log(obj.getA())

function doAdd(x) {
  return function (y) {
    return x + y
  }
}

// var add5 = doAdd(5)
// console.log(add5(10))

console.log(doAdd(5)(10))
