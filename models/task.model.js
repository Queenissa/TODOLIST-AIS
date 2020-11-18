const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    taskname:{
        type: String,
        allowNull:false,
        required: true
    }
});
taskSchema.set('timestamps',true);

module.exports = mongoose.model('TasksSchema', taskSchema);