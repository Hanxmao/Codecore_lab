// Write a function, findDuplicates, that takes an array of strings 
// and/or integers, values. Return a new array containing all the values that are duplicated in the array.

function findDuplicates(arr){
    let dupArr=[]
    arr.sort()
    while(arr.length){
        if(arr[0]===arr[1]){
            if(dupArr[dupArr.length-1]!==arr[0]){
            dupArr.push(arr[0])
            }
        }
        arr.splice(0,1)
    }
    return dupArr
}

let run = findDuplicates([1,2,1,0,100,1000,100,101,2,88,2,3,4,5,88,6,9,9])

console.log(run)