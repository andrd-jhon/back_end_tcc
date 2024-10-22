const Sequelize = require('sequelize');

const connection = require('../config/database');

const modeLivro = connection.define(
    'tblUsers',
    {
        userId:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        userName:{
            type:Sequelize.STRING(200),
            allowNull:false
        },
        userEmail:{
            type:Sequelize.STRING(200),
            allowNull:false
        },
        userPassword:{
            type:Sequelize.STRING(200),
            allowNull:false
        },
    },
    {
        timestamps: false
    }
);

// modeLivro.sync({force:true});

module.exports = modeLivro;