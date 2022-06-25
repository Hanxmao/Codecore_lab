const http=require("http")
const url = require('url')

const server = http.createServer((request,respond)=>{
    const params = url.parse(request.url, true).query
    let print= ''
    if(params && params.temp){
        let result=parseInt(params.temp)
        let cel = (result-32)*5/9
        print = `The Celsius is ${cel}` 
    }
    


    respond.writeHead(200, {'content-type':'text/html'})
    respond.write(`<!DOCTYPE html>
        <html>
            <head>
                <title>Test</title>
            </head>
            <body>
                <h1>Home page</h1>
                <p>${print}</p>
            </body>
        </html>
    `)
    respond.end()
})

server.listen(8080)
console.log('Listening 8080')


