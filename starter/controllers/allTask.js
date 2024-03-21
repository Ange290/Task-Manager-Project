const taskSchema = require('../model/taskModel.js')
const asyncWrapper = require('../middleware/async.js')
const {createCustomError}=require('../errors/custom-error.js')
//get all
 const getAllTask = asyncWrapper( async (req,res)=>{
      const getTask = await taskSchema.find({})
      res.status(200).json({getTask})
   })
  //post
const createTask =  asyncWrapper(async(req,res)=>{
       const tasks = await taskSchema.create(req.body)
      res.status(201).json({tasks})
  })
//get single task
const getSingleTask = asyncWrapper(async(req,res,next)=>{
   const {id: taskId} = req.params
      const singleTask = await taskSchema.findOne({_id:taskId})
      if(!singleTask){

       return  next(createCustomError(`No task with id: ${taskId}`, 404))
         //res.status(404).json({message:`No task with id: ${taskId}`})
      }else
      res.status(200).json({singleTask})
})
//update
const updateTask = asyncWrapper(async(req,res)=>{
   const {id: taskId} = req.params
      const updateTaskById = await taskSchema.findByIdAndUpdate({_id:taskId},{$set:req.body},{new:true})
      if(!updateTaskById){
         return  next(createCustomError(`No task with id: ${taskId}`,404))
      }else{
         res.status(200).json({message:'Task updated successfully', updateTaskById})
      }})
 

//delet
const deleteTask = asyncWrapper(async(req,res)=>{
   const {id: taskId} = req.params
   const  deleteById = await taskSchema.findOneAndDelete({_id:taskId})
   if(!deleteById){
      return  next(createCustomError(`No task with id: ${taskId}`,404))
   }else{
      res.status(200).json({message: 'Task deleted successfully', deleteById})
   }

})
module.exports = {getAllTask,createTask,getSingleTask,updateTask,deleteTask}
