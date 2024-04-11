const express = require('express');
const app = express();

const control = require('./sum')


app.get('/',(req,res) => {
    res.send('hello')
    console.log(control(10,20));
})

app.listen(3000,() => {
    console.log('server is starting at http://127.0.0.1:3000');
})