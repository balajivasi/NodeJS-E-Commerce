exports.getHomePage=(req,res)=>{
    const viewData={
        pageTitle:'Home page'
      }
      res.render('homePage',viewData)
} 