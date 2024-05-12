const db = require('../models')
const ROLES = db.ROLES; 
const User = db.users;

checkDuplicateUserEmail = (req , res , next) => {
 User.findOne({
    where : {
        username : req.body.username
    }
 })
 .then(user => {
    //  if user is present
    if(user){
        
    }
 })
}







