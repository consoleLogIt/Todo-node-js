const mongoose = require('mongoose');

const taskSchema  = new mongoose.Schema({
    description :{
        type:String,
        required:true,
    },
    category:{
        type:String,
    },
    deadline:{
        type:String,
    },
    //to check the status of task
    isDone:{
        type:Boolean,
    }
},
    
{
    timestamps:true
}    
)

const Task  = mongoose.model('Tasks',taskSchema);

module.exports = Task;