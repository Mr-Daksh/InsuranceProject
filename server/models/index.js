// intialistaion of sequelize 
// after intialising this we dont need to do CRUD operations as it is handle by sequelizer only

const config = require("../config/db.config.js")
const Sequelize = require("sequelize")

const sequelize = new Sequelize(
    config.DB , 
    config.USER , 
    config.PAASSWORD ,
    {
        host : config.HOST , 
        dialect : config.dialect , 
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire, // max time before a idle connection beign realsed
            idle: config.pool.idle   // max time before pool tries to give an error ( of connection )
          } 
    }
)


// db decleration 
const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.role = require('../models/role.model.js')(sequelize, Sequelize); 
db.users = require('../models/user.model.js')(sequelize, Sequelize); 

// defining relations b/w users and role 
db.role.belongsToMany(db.users , {
    through : "user_roles"
})

db.users.belongsToMany(db.role , {
    through : "user_roles"
})

db.ROLES = ["user" , "admin"]

module.exports = db ;  