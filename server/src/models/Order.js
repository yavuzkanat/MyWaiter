const sequelize = require('../config/db');
const { DataTypes, or } = require('sequelize');

/**
 * Order ORM Model 
 */

const order = sequelize.define('Order', {


    orderName: {

        type: DataTypes.STRING,
        allowNull: false,

    },
    orderStatus: {
        type: DataTypes.ENUM('Pending','Preparing','Served','Paid'),
        allowNull: false,
    },
    
    tableID: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = order;