const Sequelize= require('sequelize');
const db = require('../config/db.config');

const user=db.define('user',{
firstname:{
    type:Sequelize.STRING,
    allowNull: false
} ,
lastname: {
    type:Sequelize.STRING,
    allowNull: false
},
photo:{
    type:Sequelize.BLOB
},
email: {
    type:Sequelize.STRING,
    allowNull: false,
    unique: true
},
password: {
    type:Sequelize.STRING,
    allowNull: false
},
role: {
    type:Sequelize.STRING,
    allowNull: false
},
status:{
    type:Sequelize.STRING
},
personalNumber: {
    type:Sequelize.INTEGER
},
address: {
    type:Sequelize.STRING
}
})
user.sync({alter:true});
module.exports = user;