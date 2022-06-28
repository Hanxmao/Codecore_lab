const net = require('net')

const server= net.createServer((socket)=>{
    socket.setEncoding('utf8')
    socket.on('data',(data)=>{
        console.log(`Server received : ${data}`);
        let result = ''
        for(let i=1; i<=data.length; i++){
        result+=data[data.length-i]
        }
        socket.write(result)
    })
    .on('error',(err)=>{
        console.log(err)
    })
})


server.listen(8000,()=>{
    console.log("Server is lisening on port 8000")
})



