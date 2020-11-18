const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');

router.get('/', taskController.task);
router.post('/addtask', taskController.addTask);
router.get('/delete-task/:id', taskController.deleteTask);
router.get('/edit-task/:id',taskController.findToUpdateTask);
router.post('/update-task/:id', taskController.updateTask)
router.get('/delete-all', taskController.deleteAll);
module.exports = router;