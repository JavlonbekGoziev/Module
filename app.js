const math = require('./mathModule')

const sum = math.add(5,20 )
const minus = math.minus(5,20)

const mult = math.multiply(5,20 )
const division = math.division(5,20)

const persent = math.persentage(5,20 )
const combined = math.combined(5,20, 5)

console.log("Sum: ", sum)
console.log("Minus:", minus)
console.log("Multiply: ", mult)
console.log("Division:", division)
console.log("Persentage: ", persent)
console.log("combined:", combined)

