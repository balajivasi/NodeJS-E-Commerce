exports.getAdminpage=(req,res)=>{
    const viewData={
        pageTitle:'Admin PAge'
      }
      res.render('admin',viewData)
}