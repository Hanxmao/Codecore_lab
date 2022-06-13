// Write a script `fizzBuzz.js` that takes two numbers, then iterates through the numbers from 1 to 100 
// logging "fizz" if the current number is divisible by the first number, "buzz" 
// if the current number is divisible by the second number, "fizzbuzz" 
// if it's divisible by both, else print the current number.

const a = parseInt(process.argv[2])
const b = parseInt(process.argv[3])

for (let i= 1; i<101 ;i++){
    if (i%a==0 && i%b==0){
        console.log('fizibuzz')
    } else if (i % a === 0) {
        console.log('fizz');
    } else if (i % b === 0){
        console.log('buzz');
    } 
    else {
        console.log (i);
    }
}
