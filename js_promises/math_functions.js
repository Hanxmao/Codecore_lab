// Create a collection of "async" math functions that return promises. Any function

// can be made asynchronous by using setTimeout without a time argument.

// Create the following functions:

// add: Sums two numbers together.
// mult: Multiplies two arguments together.
// div: Divides the first argument by the last.
// sub: Subtracts the last argument from the first.
// pow: Raises the first to the power of the second.
// Each function should return a Promise where its promise value is the result of the calculation.

//  

const add = (a,b,val)=>{
    return new Promise((resolve, reject)=>{
        if (a ===NaN){
            reject(console.log(`${num} is not a valid number`))
        }
        
    })
}

    

mult(9)

  .then(value => add(9, value))
  .then(value => add(2, value))
  .then(value => mult(5, value))
  .then(console.log)








  ///
// function promiseMath(a, b, value) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (isNaN(a) || isNaN(b)) {
//           reject("All parameters must be numbers");
//         }
//         resolve(value);
//       });
//     });
//   }
//   function add(a, b = 0) {
//     return promiseMath(a, b, a + b);
//   }