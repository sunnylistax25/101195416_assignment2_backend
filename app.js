
const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb+srv://arunsunny:arunsunny@comp3012.bibbh.mongodb.net/101195416_assignment2?retryWrites=true&w=majority'

const app = express()


mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true})
const con = mongoose.connection;

con.on('open', () => {
    console.log('connected...')
})


app.use(express.json())

const userRouter = require('./routes/users')
app.use('/users', userRouter )

app.listen(9000, ()=>{
    console.log('Server started')
})

