var express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
var firebase = require('firebase');
//var firebaseui = require('firebaseui');
//var {mongoose} = require('./db/mongoose');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/views'));


//var db = mongoose.connection;


const PORT = process.env.PORT || 3000;




app.get('/',(req,res) => {
   res.render('index.html');
});


app.listen(PORT, console.log(`server started on port ${PORT}`));


