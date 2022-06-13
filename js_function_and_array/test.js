//user input as array
const input = []
let i =2
while (process.argv[i]){
    input.push(process.argv[i])
    i++
} 

//find largest element length of the input array
let larLength=0
for (i=0;i<input.length;i++){
    if(input[i].length>larLength){
        larLength = input[i].length
    }
}

console.log(input)
console.log(larLength)  