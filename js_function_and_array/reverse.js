

function reverse (words){
    let result = ''
        for (let i = 1;i<=words.length;i++){
            
            result += words[words.length-i]
        } 
        return result
    
}    

console.log(reverse('absorb'))

/* another way to reverse

function reverse(words){
    return words.split('').reverse().join('')
}
console.log(reverse('absorb'))




*/