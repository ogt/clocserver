var createServer = require('http').createServer,
    parse = require('url').parse,
    createReadStream = require('fs').createReadStream,
    spawn = require('child_process').spawn,
    child = require('event-stream').child;

var port = process.env.PORT || 8000;

function createCmdServer() {
  return createServer(function (req, res) {
    if (req.method == 'POST') {
      var parsedUrl = parse(req.url,true, true),
          args = [].concat(parsedUrl.query.args),
          cmd = parsedUrl.pathname.replace('/','');
      console.log('Executing',cmd,' with args ', args);
      var proc = child(spawn(cmd, args));
      req.pipe(proc)
         .pipe(res);
    }
    else // GET
      createReadStream('./index.html').pipe(res);
  });
}

createCmdServer().listen(port);
console.log('Server running at http://localhost:'+port+'/');
