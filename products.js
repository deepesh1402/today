var express = require('express');
var app = express();


var productController=function(req, res){
  console.log("Invoking  rest api for product list");
  var products = [
    {id:1, title:"Iphone 5s",description:"Ram:1gb",quantity:5, unitprice:10},
    {id:2, title:"Iphone 6",description:"Ram:1.5gb",quantity:15, unitprice:12},
    {id:3, title:"Iphonexr",description:"Ram:2.5gb",quantity:5, unitprice:16},
    {id:4, title:"Ihpone x",description:"Ram 3gb",quantity:20, unitprice:20},
    {id:5, title:"Iphone 7s",description:"Ram 5gb",quantity:25, unitprice:15},
  ];
  res.send(products);
};

// setting router to map requests  with controllers
app.get ('/products',productController);
var server = app.listen(8086, function () {
  var host = server.address().address
  var port = server.address().port
  console.log(" app listening at http://localhost:8086", host, port)
})