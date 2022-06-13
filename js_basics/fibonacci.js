// Create a script named `fibonacci.js` that takes a number as an argument which logs, 
// in order, numbers from the fibonacci sequence up-to the given number argument. 
// You can research the [fibonacci sequence on Wikipedia](https://en.wikipedia.org/wiki/Fibonacci_number). 
// If no number arguments are given, log "A number argument is required".
const a = parseInt(process.argv[2])

let j = 1
let k = 1
let l = 0

for (let i = 0; i<a; i++){
    console.log(j)
    l = j+k
    j = k
    k = l
}