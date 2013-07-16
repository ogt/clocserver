
var port = process.env.PORT || 8000;



function fetchUrlToLocalFile(url, cb){
  var temp = require('temp'),
      request = require('request');
  
  var tmpStream = temp.createWriteStream();
      req = request(url);
  req.pipe(tmpStream);
  req.on('end', function() { cb(err, tmpStream.path); });
}

/*
function fetchUrls(urllist) {
  var urlMap;
  for (url in urlList) {
    var p = promise();
    fetchUrlToLocal
  }
}
*/
var createCommandServer = require('webcommand').createCommandServer;
createCommandServer().listen(port);
console.log('Server running at http://localhost:'+port+'/');
