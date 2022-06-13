// Write a script `pyramid.js` that takes a number as an argument then logs a pyramid of `#` 
// with that many number of rows.

const a = parseInt(process.argv[2])

for (i=1; i<a+1;i++){
    console.log(' '.repeat(a-i) + '# '.repeat(i) + '\n')
}