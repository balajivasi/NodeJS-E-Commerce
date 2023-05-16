const express=require('express');
const { getProductsPage } = require('../controller/productController');

const routes=express.Router();

routes.get('/',getProductsPage)

module.exports=routes