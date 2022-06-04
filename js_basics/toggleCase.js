let a = process.argv[2]
let b = ''

if (typeof a === 'string'){
    for (let i =0; i<a.length; i++){
        if (a[i] == a[i].toUpperCase()){
            b= b+ a[i].toLowerCase()
        } else {
            b= b+ a[i].toUpperCase()
        }
    }
} else {
    console.log('Invalid input')
}
console.log(b)
console.log(typeof a)