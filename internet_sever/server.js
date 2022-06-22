const net = require('net');
// const PORT = 5000;


const server = net.createServer(function (socket) {
    socket.on("data", function (data) {
        let defauNum = -Infinity
        let arr= data.toString().split(',')
        arr.forEach((ele)=>{
        if (ele>defauNum){
            defauNum=ele
        }
        socket.write(arr.toString());
        server.close()
    })
})
})

server.listen(8000, "127.0.0.1", () => {
    console.log("Server is listening on 127.0.0.1:8000");
});




















// const net = require('net'); // net is a module built into NodeJS that is used for creating TCP server

// const server = net.createServer(function (socket) {
//   // this callback function is an event listener
//   // an even listener is a function that will trigger specified event
//   // "socket" is representing a connection

//   socket.on("data", function (data) {
//     let str= data.toString()
//     let result = ''
//     for (let i = 1;i<=data.length;i++){
            
//         result += data[data.length-i]
//     } 
//     socket.write(`${result.toString()}`)
//   })  
// })

// server.listen(5000, "127.0.0.1", () => {
//   console.log(`Server is listening on 127.0.0.1:5000`);
// })
