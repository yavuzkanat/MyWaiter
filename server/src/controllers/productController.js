


/**  
 * GET Method For Products
 * This method get order from customers for business.
 * It returns a JSON data.
 * @return {JSON} Order
 *  */
exports.getOrders = (req, res, next) => {

    res.setHeader('Content-Type','application/json');
    res.json({"hello" : "world"});
    
}