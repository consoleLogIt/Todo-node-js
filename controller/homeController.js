const Task = require('../model/task');
const Noty = require('noty');



//render home page
module.exports.homepage = function(req,res)
{
   
    
    let done =0;
let toBeDone =0;
    Task.find({}, function(err,tasks){
        if(err){
            console.log("error");
            return;
        }
        for(let i of tasks){
          if(i.isDone){
              done++;
          }
          else{
              toBeDone++;
          }
        }
    return res.render('homepage',{
        task_list:tasks,
        done:done,
        toBeDone:toBeDone
    });
})
}

//create task 
module.exports.create_task = function(req,res){
    Task.findOne({description: req.body.description}, function(err,task){
        if(err){
            console.log('error in finding  task during creation')
            return;
        }

        if(!task){
            Task.create(req.body, function(err,task){
                if(err){
                    console.log(err,'error  in creating task')
                    return;
                }
               
                
            })
        }   
return res.redirect('back');
})
}

// update task status ie isDone or not
module.exports.update_task = function(req,res){
    Task.findByIdAndUpdate(req.params.id,req.body,function(err,task){
        if(err)
        {
            console.log(err);
        }
    return res.redirect('back');

    })


}

// delete task specific tasks
module.exports.delete_task = function(req,res){
     Task.find({isDone:true},function(err,tasks){
         if(err){
             console.log(err);
             return;
         }
        for(let i of tasks){
            {
                i.remove();
            }
        }
    })
    return res.redirect('back');
}


// delete all task
module.exports.delete_all = function(req,res){
    Task.deleteMany({},function(err){
        console.log(err);
        return;
    })
    return res.redirect('back');
}

// check all tasks
module.exports.check_all = function(req,res){
    Task.updateMany({isDone:false,},{isDone:true},function(err,task){
        console.log(err);
        return;

    })
    return res.redirect('back');
}