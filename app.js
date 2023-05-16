const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const rootDir = require("./utils/path");


const app = express();
app.set('view engine','ejs');
app.set('views','views');

app.use(express.static(path.join(rootDir, "public")));

app.use(bodyParser.urlencoded({ extended: true }));

// pages start
const homeRoutes = require("./routes/home");
const productRoutes = require("./routes/products");
const adminRoutes = require("./routes/admin");

app.use(homeRoutes);
app.use("/products",productRoutes);
app.use("/admin", adminRoutes);


app.use((req, res) => {
  const viewData={
    pageTitle:'Page not found'
  }
  res.status(404).render('404',viewData);
});

//pages End

app.listen(3000);
