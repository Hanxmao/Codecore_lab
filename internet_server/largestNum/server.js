const net=require('net')


const server=net.createServer((socket)=>{
    socket.setEncoding('utf8')
    socket.on('data',(data)=>{
        console.log("Server received: "+ data)
        let arr=data.split(',')
        let result = -Infinity
        for (let i of arr){
            if(parseInt(i)>=result){
                result=parseInt(i)
            }
        }
        console.log("the largest number of the list: "+result)
    })

})

server.listen(8000,()=>{
    console.log("Server is listening 8000");
})