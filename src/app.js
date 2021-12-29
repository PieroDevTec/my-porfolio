const express = require('express');
const path = require('path');
const morgan = require('morgan');
const route = require('./network/network');

const app = express();

app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'./views'));
app.set('view engine','pug');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use('/public',express.static(path.join(__dirname,'/public')));
app.use(route);

module.exports = app;