const { QueryInterface } = require('sequelize');
const Sequelize= require('sequelize');
const db = require('../config/db.config');

const zone=db.define('zone',{
    id:{
        allowNull=false,
        autoincrement=true,
        primaryKey: true,
        type:Sequelize.INTEGER,
    },
    name:{
        type:Sequelize.STRING,
        required: true
    },
    neighborhood: {
        type:Sequelize.STRING,
        required: true
    },
    color:{
        required:true,
        type:Sequelize.STRING
    },
    agent_ids: {
        type:Sequelize.STRING,
        allowNull:false,
        references:{
            model:'users',
            key:'id'
        }
        
    }
})
zone.sync= true;
module.exports=zone;
