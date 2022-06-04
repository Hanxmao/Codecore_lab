const a = parseInt(process.argv[2])
const b = parseInt(process.argv[3])
const c = parseInt(process.argv[4])
let s = (a+b+c)/2
let area = Math.sqrt((s*(s-a)*(s-b)*(s-c)))
let p = a+b+c
if (a+b>c && a+c>b && b+c>a){
    console.log(`Area of the triangle is ${area}, perimeter of the triangle is ${p}`)
} else {
    console.log("Impossible triangle!")
}

