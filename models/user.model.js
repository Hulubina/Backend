const Sequelize= require('sequelize');
const db = require('../config/db.config');

const user=db.define('user',{
firstname:{
    type:Sequelize.STRING,
    required: true
} ,
lastname: {
    type:Sequelize.STRING,
    required: true
},
photo:{
    type:Sequelize.BLOB
},
email: {
    type:Sequelize.STRING,
    required: true,
    unique: true
},
password: {
    type:Sequelize.STRING,
    required: true
},
role: {
    type:Sequelize.STRING,
    required: true
},
status:{
    type:Sequelize.STRING
},
personalNumber: {
    type:Sequelize
},
address: {
    type:Sequelize.STRING
}
})
user.sync = true;
module.exports = user;