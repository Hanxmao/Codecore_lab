const myArray = [[2,3,4], ["Hello CodeCore", 1, true]]



function printMulti (arr){
    arr.forEach((ele)=>{
    ele.forEach((each)=>{
    console.log(each)
})
})
}

printMulti(myArray)