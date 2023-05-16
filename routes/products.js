const express=require('express');

const routes=express.Router();

routes.get('/',(req,res)=>{
    const viewData={
        pageTitle:'Products page',
        products:[
            { title: 'products1'},
            { title: 'products2'}
        ]
      }
    res.render('products',viewData)
})

module.exports=routes