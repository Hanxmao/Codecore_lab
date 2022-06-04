//Write a function, isEven, that takes a number as argument. It returns true if the number is even otherwise it returns false. 
//You are not allowed to use the modulus operator (%) nor the division operator (/).

function isEven(num){
    let flag=true
    let i = 0
    for (i<num;i=0;i--){
        flag = !flag
    }
    return flag
}

console.log(isEven(2))

//