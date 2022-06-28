const net = require('net')
const client = new net.Socket()
const readline= require('readline')
const rl = readline.createInterface(process.stdin, process.stdout)


client.setEncoding('utf8')
client.on('data',(data)=>{
    console.log("Client received: "+data)
})



client.connect(8000,()=>{
    console.log("type some numbers, seperated by comma. e.g. 1,2,3,4")
    rl.on('line',(input)=>{
    client.write(input)
    }) 
})