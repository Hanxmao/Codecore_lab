// Write a script `raiseToThePower.js` that takes two numbers as arguments, 
// then calculate the first number raised to the power of the second number and log it to the screen.

const a = parseInt(process.argv[2])
const b = parseInt(process.argv[3])

let x = Math.pow(a,b)
console.log(x)