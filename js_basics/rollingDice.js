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