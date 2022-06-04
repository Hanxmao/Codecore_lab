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