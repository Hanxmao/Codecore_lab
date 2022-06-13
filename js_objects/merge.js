// Write a function, merge, that takes two objects,objA & objB respectively 
// then returns a new object with all keys of objA & objB. objA & objB should not be mutated when 
// calling this function. If objects objA & objB share keys, objB's key should take precedence over objA's.

function merge(obj1,obj2){
    const result ={}
    for (let i in obj1){
        result[i] = obj1[i]
    }
    for (let i in obj2){  
        result[i]= obj2[i]
    }
    return result
}




console.log(merge({a: 1, b: 2}, {c: 3, d: 4}))


console.log(merge(

    {firstName: 'Ron', lastName: 'Wesley', occupation: 'Wizard'},
  
    {firstName: 'Harry', lastName: 'Potter'}
  
  ))