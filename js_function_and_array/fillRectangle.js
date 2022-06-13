// Write a function, fillRectangle, that takes 3 arguments: a number representing a width, 
// another number representing a height and a single character string as chr. 
// It must return a 2 dimensional array 
// (i.e. an array containing elements with values that are also of array type, each with the same length.)
//  The outer array should be of length height, and the inner arrays should each have length width, 
// where the values of the inner arrays are filled with chr.

function fillRectangle (wid,hei,chr){
    let ori = []
    for (let i=0;i<wid;i++){
        ori.push(chr)
    }
    let final = []
    for (let j=0;j<hei;j++){
        final.push(ori)
    }
    return final
}


function rectangleToString (arr){ 
    let pass = ''
    for (let outter of arr){
        for (let inner of outter){
            pass+=inner
        }
        pass+='\n' 
    
    }
    return pass
}

const str = rectangleToString(fillRectangle(2, 2, "**"))
console.log(str)

// tutor answer
// function fillRectangle(width, height, character) {
//     // if the character parameter is not a string or number exit the function
//     if ((typeof character !== 'string') && (!typeof character === 'number')) {
//       console.log(`expecting character to be type of string or number, instead got ${typeof character}`);
//       return;
//     }
//     // creates an array of characters equal to the amount of the width
//     let row = [];
//     for (let i = 0; i < width; i++) {
//       row.push(character);
//     }
  
//     // for the amount of height push the created "row" array into another array
//     let rectangle = [];
//     for (let i = 0; i < height; i++) {
//       rectangle.push(row);
//     }
  
//     return rectangle;
//   }
  
  
//   const rect = fillRectangle(3,5, '🔥 ');
//   console.log(rect);
  
//   function rectangleToString(arr) {
//     // if the arr parameter is not an array exit the function
//     if(!Array.isArray(arr)) {
//       console.log(`expected arr to be an array, instead got ${typeof Array}`);
//       return;
//     }
  
//     // loop through and add each character from the nested array into a string
//     let string = '';
//     for (const element of arr) {
//       for (const character of element) {
//         string += character;
//       }
//       string += '\n';
//     }
  
//     return string;
//   }
  
//   const rect_to_string = rectangleToString(fillRectangle(3,5, 1))
//   console.log(rect_to_string)