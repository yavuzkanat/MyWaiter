const express = require('express');
const app = express();
const mainRoutes = require('./src/routes/mainRoutes');
const Order = require('./src/models/Order');
const sequelize = require('./src/config/db');
const OrderItem = require('./src/models/OrderItem')
const Product = require('./src/models/Product');
const test = require('./test/dbTestCase');
const port = 3000;


// DB Associations


// Test 
test.DB_TEST()


// Routes 
app.use('', mainRoutes);





app.listen(port, () => console.log(`http://127.0.0.1:${port}/`))