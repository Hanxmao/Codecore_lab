// Create an object named, StringExtras, that contain several utility methods that re-implement some string library methods. You are not allowed to use the existing methods of the same name to implement these. 


// It should have a:


// - repeat method that duplicates a string n of times.

// - leftPad method that adds space to the left of a string until the string is of length n.

// - rightPad method like leftPad, but adds spaces to the right of the string.

// - pad method like leftPad, but adds spaces to the left & right of the string.

// - capitalize method which uppercases the first letter of a string.


const stringExtras={
    repeat:(str,n)=>{
        let result = ''
        for (i=0;i<n;i++){
            result+=str
        }
        return result
    }
    ,
    leftPad:function (str,n){
        let gap = n-str.length
        if (n>=str.length){
            str = this.repeat(' ',gap)+str
        }
        return str
    }
    ,
    pad (string, n) {
        let newString = '';
        let num = (n-string.length)/2;
        for (let i = 0; i < num; i++) {
            newString += '_';
        }
        newString += string;
        for (let i = 0; i < num; i++) {
            newString += '_';
        }
        newString = newString.slice(0,n);// answer from Alec, really smart answer, if let me do it I would ues if (num%===0)
        return newString;
    }


// //     caplitalize: .shift().toUpperCase
}

console.log(stringExtras.pad('you',7))



















// answer:
// const StringExtra = {
//     repeat(word, n){
//         let result = ''
//         for(let i=0; i < n; i++){
//             result = result + word
//         }

//         return result
//     },

//     // leftPad (word,n){
//     //     let result = ''
//     //     let difference = n - word.length
//     //     for (let i = 0; i <difference; i++) {
//     //         result +=' '
//     //     }
//     //     return result+word
//     // },

//     leftPad(word, n){
//         let result = ''

//         if(n > word.length){
//             const difference = n - word.length
//             for(let i = 0; i < w; i++){
//                 result = result + ' '
//             }
//         }
//         const demo = result + word
//         return demo
//     },

//     rightPad(word, n){
//         let result = ''

//         if(n > word.length){
//             const difference = n - word.length
//             for(let i = 0; i < w; i++){
//                 result = result + ' '
//             }
//         }
//         const demo =  word + result 
//         return demo
//     },

//     pad (string, n) {
//         let newString = '';
//         let num = (n-string.length)/2;
//         for (let i = 0; i < num; i++) {
//             newString += ' ';
//         }
//         newString += string;
//         for (let i = 0; i < num; i++) {
//             newString += ' ';
//         }
//         newString = newString.slice(0,n);
//         return newString;
//     }
// }
// let a = 'you'
// console.log(StringExtra.repeat(a,3))