const net = require('net')
const { stdin } = require('process')
const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
})


const client = new net.Socket()
client.setEncoding('utf8')
client.on('data',(data)=>{
   
    console.log(`Client received: ${data}`);
})

client.connect(8000,'localhost',function(){
    rl.on('line',(input)=>{
        client.write(input)
    })
    
})







