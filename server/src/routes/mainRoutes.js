const express = require('express');
const router = express.Router();
const controllerMain = require('../controllers/productController');


// Home Page
router.get('/',controllerMain.getOrders);


module.exports = router