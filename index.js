//import all required modules
const express = require('express');
const app =  express();
const port  = 8000;
const db = require('./config/mongoose');
const session = require('express-session');


// to recognize the incoming Request Object as strings or arrays
app.use(express.urlencoded());
// to serve static files 
app.use(express.static('assets'));

// to direct actions to thier appropriate controllers


app.set('views','./view');

//set view engine
app.set('view engine','ejs');


app.use(session({
    name:'todo',
	secret:'this is secret',
	saveUninitialized: true,
	resave: true
}));


app.use('/', require('./routes'));

//where server listens
app.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }
        
        console.log("running");
});
