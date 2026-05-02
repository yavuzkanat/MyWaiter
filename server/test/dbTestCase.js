const Order = require('../src/models/Order');
const sequelize = require('../src/config/db');
const OrderItem = require('../src/models/OrderItem')
const Product = require('../src/models/Product');

Order.hasMany(OrderItem, { foreignKey: 'orderId' });
OrderItem.belongsTo(Order, { foreignKey: 'orderId' });
Product.hasMany(OrderItem, { foreignKey: 'productId' });
OrderItem.belongsTo(Product, { foreignKey: 'productId' });

// DB Associates

/**
 * DB TEST NO : 1
 * 
 */
async function DB_TEST() {
    try {
        await sequelize.sync({ force: true });

        const product = await Product.create({

            productName: 'Latte',
            productOnStock: true,
            productDescription: "A classic latte",
            productPrice: 100.00,
        });

        const order = await Order.create({
            orderName: 'Latte',
            orderStatus: 'Pending',
            tableID: 10,
        });

        await OrderItem.create({
            orderQuantity: 2,
            orderPrice: 200.00,
            orderId: order.id,
            productId: product.id
        });

    } catch (err) {
        console.log(err);
    }
    const result = await Order.findAll({
        include: {
            model: OrderItem,
            include: Product
        }
    });

    console.log(JSON.stringify(result, null, 2));
}


module.exports = { DB_TEST };