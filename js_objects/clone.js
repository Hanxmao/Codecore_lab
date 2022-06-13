// Implement a function, >clone, that creates a copy of an object 
// such that >objA === objB should return >false 
function clone(obj){
    result = {}
    for (let ele in obj){
        result[ele]=obj[ele]
    }
    return result
}

console.log(clone({a: 1, b: 2}))
console.log(clone({a: 1, b: 2})==={a: 1, b: 2})

