exports.getProductsPage=(req,res)=>{
    const viewData={
        pageTitle:'Products page',
        products:[
            { title: 'products1'},
            { title: 'products2'}
        ]
      }
    res.render('products',viewData)
}