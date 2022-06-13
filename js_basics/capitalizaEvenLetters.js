//Write a script `capitalizeEvenLetters.js` that takes a word as an argument. 
//Upper case every even letter and lower case every odd letter of the word then log it.

let a = process.argv[2];
let b = ''
if (a == true){
    for (let i=0;i<a.length;i++) {
    if (i % 2 == 0){
        b= b+a[i].toUpperCase()
    } else {
        b=b+a[i].toLowerCase()
    }
    }
} else {
    console.log("need input")
}


console.log(b);