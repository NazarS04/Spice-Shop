"use strict";
require("dotenv").config();
const path = require("path");
const favicon = require("serve-favicon");
const mysql = require("mysql2");
const express = require("express");
const app = express();

const dir = path.parse(__dirname).dir;

const pool = mysql.createPool({
  connectionLimit:10,
  host:"localhost",
  user: process.env.user,
  password: process.env.password,
  database:"mydb"
}).promise();

app.set("view engine", "ejs");
app.set("views", path.join(dir, "front", "views"));

app.use(express.static(path.join(dir, "front", "public")))
app.use(favicon(path.join(dir, "front", "public", "img", "favicon.ico")))

const getURL = function (...arg) {
  return path.join("pages", ...arg);
}

const getCategoryFromDb = async function (req,res,use) {
  req.categorys = (await pool.query("select * from category"))[0];
  use();
}

app.use(getCategoryFromDb)

app.get("/", async function (req, res) {
  const products = (await pool.query("select * from product where id >= 5 and id <= 8 or id >= 20 and id <= 27"))[0]
  let i = 0;

  res.render(getURL("index"),{
    categorys:req.categorys,
    products: products,
    i:i,
  })
})

app.get("/about-us", function (req, res) {
  res.render(getURL("about-us"),{
    categorys:req.categorys,
  })
})

app.get("/payment-delivery", function (req, res) {
  res.render(getURL("payment-delivery"),{
    categorys:req.categorys,
  })
})

app.get("/cooperation", function (req, res) {
  res.render(getURL("cooperation"),{
    categorys:req.categorys,
  })
})

app.get("/login", function (req, res) {
  res.render(getURL("login"),{
    categorys:req.categorys,
  })
})

app.get("/privacy-policy", function (req, res) {
  res.render(getURL("privacy-policy"),{
    categorys:req.categorys,
  })
})

app.get("/registration", function (req, res) {
  res.render(getURL("registration"),{
    categorys:req.categorys,
  })
})

app.get("/:categoryId", async function (req, res, use) {
  if(isNaN(+req.params.categoryId) || req.params.categoryId-1 >= req.categorys.length){
    use();
    return;
  }

  const products = (await pool.query("select * from product where categoryId=?",[req.params.categoryId]))[0];
  const category = req.categorys[req.params.categoryId-1];

  res.render(getURL("category"),{
    categorys:req.categorys,
    title:category.name,
    products:products
  })
})

app.get("/:categoryId/:productId",async function(req,res,use){
  if(isNaN(+req.params.categoryId) || isNaN(+req.params.productId)){
    use();
    return;
  }

  const product = ((await pool.query("select * from product where categoryId=? and id=?",[req.params.categoryId,req.params.productId]))[0])[0]

  if(!product){
    use();
    return;
  }

  let code;

  if(product.id <= 9){
    code = `000${product.id}`;
  }else if(product.id <= 99){
    code = `00${product.id}`;
  }else if(product.id <= 999){
    code = `0${product.id}`;
  }else{
    code=product.id;
  }

  res.render(getURL("product"),{
    categorys:req.categorys,
    product:product,
    code:code,
  })
})

app.use(function (req, res) {
  res.status(404).render(getURL("error404"),{
    categorys:req.categorys
  })
})

app.listen(3000)