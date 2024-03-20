const taskSchema = require('../model/taskModel.js')
//get all
 const getAllTask = async (req,res)=>{
   try {
      const getTask = await taskSchema.find({})
      res.status(201).json({getTask})
   } catch (error) {
      res.status(500).json({message:error})
   }
    //post
 }
const createTask = async(req,res)=>{
   try {
       const tasks = await taskSchema.create(req.body)
      res.status(201).json({tasks})
   } catch (error) {
      res.status(500).json({message:error})
   }
  
}
//get single task
const getSingleTask = async(req,res)=>{
   try {
      const singleTask = await taskSchema.findOne({_id:req.params.id})
      if(!singleTask){
         res.status(404).json({message:`No task with this id`})
      }else
      res.status(201).json({singleTask})
   }
    catch (error) {
      res.status(500).json({message: error})
   }
   
}
//update
const updateTask = async(req,res)=>{
   try {
      const updateTaskById = await taskSchema.findByIdAndUpdate({_id:req.params.id},{$set:req.body},{new:true})
      if(!updateTaskById){
         res.status(500).json({message:'No task with this id'})
      }else{
         res.status(200).json({message:'Task updated successfully', updateTaskById})
      }
   } catch (error) {
      res.status(500).json({message:error})
   }
}
//delet
const deleteTask =async(req,res)=>{
try {
   const  deleteById = await taskSchema.findOneAndDelete({_id:req.params.id})
   if(!deleteById){
      res.status(500).json({message: 'No task with this id'})
   }else{
      res.status(200).json({message: 'Task deleted successfully', deleteById})
   }
} catch (error) {
   res.status(500).json({message:error})
}
}
module.exports = {getAllTask,createTask,getSingleTask,updateTask,deleteTask}
