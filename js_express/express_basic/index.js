const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('dev'))

app.get('/',(req, res)=>{
    res.render('home')
})

app.get('/car_status',(req,res)=>{
    const year = parseInt(req.query.year)
    let result = ''
    if (year >2022){
        result='Future'
    }else if (year >2016){
        result='New'
    }else if(year>2006){
        result='old'
    }else if (year<=2006){
        result='very old'
    }else if (typeof year === NaN){
        result = 'Invalid input'
    }
    else{
        result=''
    }
    
    
    res.render('car_status',{result:result} )

})

app.get('/random_person', (req,res)=>{
    let names = req.query.names || ''
    const list= names.split(',')
    let randomNum = Math.floor(Math.random()*list.length )
    let result= list[randomNum] +' wins!'

    res.render('random_person',{result:result})
})

app.set('view engine','ejs')
app.set('views','views')

app.listen(8080)
console.log('Listening on 8080')