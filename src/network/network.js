const express = require('express');
const response = require('./response');
const route = express.Router();

route.get('/',function(req,res){
  const information = {
    namePage : "Home",
  }
  response.success(req,res,200,'home',information);
})

module.exports = route;