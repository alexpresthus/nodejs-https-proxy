var https = require('https');
var fs = require('fs');
var url = require('url');
var process = require('process');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

var options = {
    key: fs.readFileSync(process.env.KEY || 'key.pem'),
    cert: fs.readFileSync(process.env.CERT || 'cert.pem')
};

console.log('Proxy server running. Waiting for request... ');

https.createServer(options, async function(req, res) {
    const q = url.parse(req.url, true);
    const qinput = q.query.input;
    const response = null;

    console.log('Request received. Constructing response...');
    
    switch (qinput) {
        case 'some input':
          // do
          break;
        default:
          response = qinput;
          break;
    }
    res.writeHead(200, {'Content-Type': 'text/html', "Access-Control-Allow-Origin": "*"});
    res.write(response);
    res.end();
    console.log('Response sent.');
}).listen(process.env.PORT || 8000);