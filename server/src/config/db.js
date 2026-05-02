const { Sequelize, Model } = require('sequelize');



/**
 * Sequelize Object
 * 
 */
const sequelize = new Sequelize(
    'mywaiter',
    'root',
    '',
    {
        dialect: "mysql",
        host: "localhost"
    }
)

module.exports = sequelize;
