const Sequelize= require('sequelize');
const db = require('../config/db.config');

const zone=db.define('zone',{
    name:{
        type:Sequelize.STRING,
        allowNull: false
    },
    neighborhood: {
        type:Sequelize.STRING,
        allowNull: false
    },
    color:{
        allowNull: false,
        type:Sequelize.STRING
    },
    agent_ids: {
        type:Sequelize.STRING,
        
        allowNull: false
    }
})
zone.sync();
module.exports=zone;
