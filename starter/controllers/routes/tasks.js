const express = require('express');
const router = express.Router();
const{getAllTask, getSingleTask, updateTask,createTask,deleteTask}=require('../allTask');
router.route('/').get(getAllTask);
router.route('/').post(createTask);
router.route('/:id').get(getSingleTask);
router.route('/:id').patch(updateTask);
router.route('/:id').delete(deleteTask);

 module.exports = router