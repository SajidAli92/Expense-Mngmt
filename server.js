const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')
// const path = require('path')
const connectDb = require('./config/connectDb')


//config dotenv file
dotenv.config();

//database call
connectDb();

//rest object
const app = express()

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//routes
//user routes
app.use('/api/v1/users',require('./routes/userRoute'))

//transaction routes
app.use('/api/v1/transactions', require("./routes/transactionRoutes"));

// //static files
// app.use(express.static(path.join(__dirname, './expenseclient/dist')))
// app.get('*', function(req,res){
//     res.sendFile(path.join(__dirname, './expenseclient/dist/index.html'));
// })

//port
const PORT = process.env.PORT || 8080;

//Listen server
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`.bgCyan.white)
});