

// function areValuesArrays(arr){
//     for (let ele of arr){
//         if (typeof (ele) !== 'object'){
//             return false
//         } else {
//             return true
//         }
//     }
// } //output : true false true   why/?



function areValuesArrays(input){
    for(var el of input) if(typeof(el) !== 'object') return false;
    return true;
}





/* it dosent work , why? out put :undefined undefined undefined
function areValuesArrays(arr) {
    arr.forEach(ele=>{
        if (typeof ele!== Object){
             return false 
        }else {return true}
    })
}
*/

console.log(areValuesArrays([[1], [2], [4, 5]]))
console.log(areValuesArrays([1, [2], [6, 7, 8]]))
console.log(areValuesArrays([[1], 2, [6, 7, 8]]))