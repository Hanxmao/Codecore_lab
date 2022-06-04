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
