const flatten = (arr)=>{
    let result = []
    for(let i =0;i<arr.length;i++){
        if (Array.isArray(arr[i])){
            const temp = flatten(arr[i])
            temp.map(j=>result.push(j))
        }else {
            result.push(arr[i])
        }
    }return result
}
console.log(flatten([ 1, 2, [3, [4,[5,6,[7,8]] ] ] ])); // returns [ 1, 2, 3, 4, 5 ])
// flatten([ 'a', [ 'b', ['c'] ] ]); // returns [ 'a', 'b', 'c' ]
// flatten([ [ 2, 3 ], [8, [5, 9], [4, 5]], 10]); // returns [ 2, 3, 8, 5, 9, 4, 5, 10 ]