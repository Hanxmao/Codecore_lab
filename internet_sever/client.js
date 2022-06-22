const net = require('net');
const readline = require('readline');
const client = new net.Socket();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

client.on("data", function (data) {
    console.log(data.toString());
    client.end();
})


client.connect(8000, "127.0.0.1", function () {
    rl.question("Type in some number. e.g. 1,2,3,4\n", (answer) => {
        client.write(answer);
        
        rl.close();
    })
    
})













// const net = require('net');
// const readline= require('readline')
// const rl = readline.createInterface({input: process.stdin, output: process.stdout});

// const client = new net.Socket()

// client.on("data", function (data) {
//   console.log("Data received from the server:" + data);
// })

// // connect is used to connect the client to a server
// // we provide the address and port of the server we want to connect to
// client.connect(5000, "127.0.0.1", function () {
//     rl.on('line',(input)=>{
//         console.log('received :'+input)
//         client.write(input)
//         // client.end()
//         rl.close()
//     })
    
// })
