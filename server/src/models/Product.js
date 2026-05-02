const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

/**
 * Product ORM Model 
 */

const product = sequelize.define('Product', {
   
    productName: {

        type: DataTypes.STRING,
        allowNull: false,

    },
    productOnStock: {

        type: DataTypes.BOOLEAN,
        allowNull: false

    },
    productDescription : {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    productPrice: {

        type:  DataTypes.DECIMAL(10,2),
        allowNull: false

    }

});

module.exports = product;