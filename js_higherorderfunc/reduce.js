// const reduce = (arr,cal,ini)=>{
    
//     for (i = 1;i<=arr.length;i++){
        
//     }
    
// }

function reduce(arr, callback, initial){
    let result = initial
    for(let index = 0; index < arr.length; index++) {
        result = callback(result, arr[index])
    }

    return result
}
const plus = (a, b) => a + b;
const numbers = [1, 2, 3, 4, 5];

console.log(reduce(numbers, plus, 0)); // 15
console.log(reduce(numbers, (a, b) => a * b, 1)); // 120