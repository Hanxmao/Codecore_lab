// Write a function, `areValuesArrays`, that takes an array, `arr`. 
// It returns `true` if all values in `arr` are of the `array` type otherwise it returns `false`.

function areValuesArrays(input){
    for(var el of input) if(typeof(el) !== 'object') return false;
    return true;
}

console.log(areValuesArrays([[1], [2], [4, 5]]))
console.log(areValuesArrays([1, [2], [6, 7, 8]]))
console.log(areValuesArrays([[1], 2, [6, 7, 8]]))