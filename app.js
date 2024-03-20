const connectDB = require ('./starter/db/connection.js')
const express = require('express');
const app = express();
const router= require('./starter/controllers/routes/tasks.js');
require('dotenv').config()
//middle ware
app.use(express.json());
 //routes
 app.get('/hello',(req,res)=>{
    res.send('Task Manager App')
 });

app.use('/api/get/tasks', router)
//app.get('/api/get/tasks') - get all tasks
//app.post('/api/post/tasks') - create new tasks
//app.get('/api/get/tasks/:id') - get single task
//app.patch('/api/patch/tasks/:id') - update task
//app.delete('/api/delete/tasks/:id') - delete task
const port = 3000;

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
