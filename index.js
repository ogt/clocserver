//var app = require('webcommand-express')(['cloc','ls','cut','tail']);   // for testing
var app = require('webcommand-express')(['cloc']);

var port = process.env.PORT || 8000;
process.env.PATH = 'bin:' + process.env.PATH;

app.get('/', function(req,res) {
    res.sendfile('index.html');
});

app.listen(port);
console.log('Listening on port: '+port);

