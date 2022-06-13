//Write a function, mergeSet, that merges two arrays and removes all duplicate elements.

function mergeSet(arr1,arr2){
    newArr=arr1.concat(arr2)
    newArr.sort()
    for (i=0;i<newArr.length;i++){
        if(newArr[i]===newArr[i+1]){
            newArr.splice(i+1,1)
            i--
        }
    }
    return newArr
}

console.log(mergeSet([1,2,3],[1,2,4]))