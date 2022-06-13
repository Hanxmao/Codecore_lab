// Write a function called `printMulti` that takes an array of arrays
// and logs every element to the console 
const myArray = [[2,3,4], ["Hello CodeCore", 1, true]]

function printMulti (arr){
    arr.forEach((ele)=>{
    ele.forEach((each)=>{
    console.log(each)
})
})
}

printMulti(myArray)