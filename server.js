var express = require("express");
var app = express();
var router = express.Router();
var path = require('path');

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    app.use('/static', express.static('static'))
});
app.use('/',router);
app.listen(3013)
console.log('Server running on port 3013');

// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('index.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
// 	res.write(data);
//     return res.end();
//   });
// }).listen(3013);
// console.log('Server running on port 3013')