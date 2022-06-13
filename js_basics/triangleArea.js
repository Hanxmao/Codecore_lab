/*
Write a script `triangleArea.js` that takes 3 number arguments, each representing the length of a side. 
Then, calculate and log the perimeter and area of the triangle. 
If given lengths do not create a valid triangle, log "Impossible triangle!" instead.
*/
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

