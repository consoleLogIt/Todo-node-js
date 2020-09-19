const moongoose = require('mongoose');
moongoose.connect('mongodb://localhost/todo_list_db');

const db = moongoose.connection;

db.on('error' , console.error.bind(console,'error connecting to db'));
 
db.once('open',function(){
    console.log("connected");
})