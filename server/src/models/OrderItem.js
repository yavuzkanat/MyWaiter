const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

/**
 * Order Item ORM Model 
 */

const orderItem = sequelize.define('OrderItem', {
    
    
    orderQuantity: {

        type: DataTypes.INTEGER,
        allowNull: false

    },
    orderPrice: {

        type: DataTypes.DECIMAL(10,2),
        allowNull: false

    },

})
module.exports = orderItem;