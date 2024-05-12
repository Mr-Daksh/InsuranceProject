const bodyParser = require('body-parser');
const express = require('express'); 
const app = express(); 
// const cookieparser = require('cookie-parser')
const bodyparser = require('body-parser')
require('dotenv').config(); 
const cors = require('cors'); 
const db = require('./models/index.js')

var corsOptions = {
    origin : "http://localhost:3000"
}
const port = process.env.PORT || 7000; 

// middlewares
app.use(cors(corsOptions)); 
app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyParser.json()); 
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// using sequlizer 
const Role = db.role; 
db.sequelize.sync({force : true}).then(()=>{
    console.log('Drop and Resync Db') // for produciton level 
    intial()  
})

function intial(){   // intially two rows in the table (user_roles)
    Role.create({
        id : 1 , 
        name : 'user'
    }); 
    Role.create({
        id : 2 , 
        name : 'admin'
    })
}

db.sequelize.sync(); 


// routes  

app.get('/' , (req , res)=>{
    res.status(200).json({message : 'hello and Bonjour!!'}); 
})



// starting the server
app.listen(port  , ()=>{
    console.log(`server is started at ${port}`)
}); 
   
   