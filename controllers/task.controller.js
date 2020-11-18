const Task = require('../models/task.model');

exports.task = async (req, res) => {
    Task.find({},(err, dataTask) => {
        if (err) {
            res.send(err);
            console.log(err)
        } else {
            res.render('todo.ejs', {
                tasks: dataTask
            })
            console.log(dataTask) 
        }
    })
}

exports.addTask = async (req, res) => {
    let newTask = new Task({taskname:req.body.title});
        console.log(req.body.title);
        await newTask.save()
            .then(() => {
                res.redirect('/');
            })
            .catch((err) => {
                console.log(err);
            })
}
exports.deleteTask = async (req,res) => {
    Task.deleteOne({_id:req.params.id}, (err) => {
        if(err){
            res.send(err);
            console.log(err);
        }
        else{
            res.redirect('/');
            console.log('Deleted successfully!')
        }
    })
}
exports.deleteAll = (req, res) => {
    Task.deleteMany({}, (err) => {
        if (err) {
            res.send(err);
            console.log(err)
        } else {
            res.redirect('/');
        }
    })
}
exports.findToUpdateTask = async (req, res) => {
    Task.findById({_id:req.params.id},
        (err, tasks) => {
            if(err){
                res.send(err);
                console.log(err);
            }
            else{
                res.render('edit.ejs', {tasks:tasks});
            }
        }
    )
}
exports.updateTask = async (req, res) => {
    Task.findByIdAndUpdate({_id:req.params.id}, 
        {$set:{taskname:req.body.title}},
        (err) => {
            if(err){
                res.send(err);
                console.log(err);
            }
            else{
                console.log(req.body.title)
                res.redirect('/');
                console.log('Updated successfully!')
            }
        }  
    )
}