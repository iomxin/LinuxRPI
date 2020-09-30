var express = require("express");
var app = express();
var router = express.Router();
var path = require('path');

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/aomsin.html'));
});

app.use('/',router);
app.listen(3013)
console.log('Server running on port 3013');