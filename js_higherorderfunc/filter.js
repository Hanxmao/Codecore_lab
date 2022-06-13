// Write an higher-order function, filter, from scratch that takes two arguments:

// the first is an array
// the second is a callback that will be called once for every element in the array with
//  3 arguments(this function returns a boolean value):
// the current value of the element
// the current index of the element
// the array itself
// filter returns a new array that only contains elements of provided array where the

// callback function returns true.


const filter = (arr,cal)=>{
     const filterArr = []
     for (i=0;i<arr.length;i++){
        let result = cal(arr[i],i,arr)
        if (result){
            filterArr.push(arr[i])
        }
     } return filterArr
}

const even = function (n){return n%2 ===0}
const odd = function(n){return !even(n)}
const above = function (min){
    return function(n){
        return n>min
    }
}
const repeatedValue= function(value,index,arr){
    return index !== arr.indexOf(value)
}
let array = [1,2,3,4,5]
console.log(filter(array, even))
console.log(filter(array, odd))
console.log(filter(array, above(3)))
console.log(filter([1,2,3,2,3,4,5], repeatedValue))
