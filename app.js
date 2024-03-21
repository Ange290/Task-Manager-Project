const connectDB = require ('./starter/db/connection.js')
const express = require('express');
const app = express();
const router= require('./starter/controllers/routes/tasks.js');
require('dotenv').config()
const notFound = require('./starter/middleware/not-found.js')
const errorHandlerMiddleware= require('./starter/middleware/error-handler.js')
//middle ware
app.use(express.json());
 //routes
 app.get('/hello',(req,res)=>{
    res.send('Task Manager App')
 });

app.use('/api/get/tasks', router)
app.use(notFound)
app.use(errorHandlerMiddleware)



const port = process.env.PORT ||3000
const start = async()=>{
   try {
      await connectDB(process.env.MONGO_URI) 
      app.listen(port , console.log(`The server is listening on port ${port}`)
      );
   } catch (error) {
      console.log(error)
   }
}
start()

