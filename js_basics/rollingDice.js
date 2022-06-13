// Write a script `rollingDice.js` that takes two numbers as arguments. 
// The first one represents a quantity of dice and the second one represents a number of faces on the dice.
//  Simulate rolling the dice. Log the result of each dice, 
// the sum and the average of all rolls.

const a = parseInt(process.argv[2])
const b = parseInt(process.argv[3])

let j = 0

for (let i = 0; i<a; i++){
    let randomNum = Math.ceil(Math.random()*b)
    console.log(`Rolled: ${randomNum}`)
    j = j + randomNum
}

console.log('-'.repeat(10))
console.log(`Average Roll: ${j/a}`)
console.log(`Total: ${j}`)