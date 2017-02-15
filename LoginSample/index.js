var express = require('express');
var app = express();
app.use(express.static(__dirname + '/design'));
//app.use(express.static(__dirname));
console.log(__dirname);

app.listen('1234', function(err) {
    if (!err)
        console.log('server started on port number 1234')
    else
        console.log('server not strated, please re-try');

});