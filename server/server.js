const express = require('express');
const basicAuth = require('express-basic-auth')

const fs = require('fs');
const os = require("os");

var app = express();
const host = '0.0.0.0';
const port = 8080;

const logFile = __dirname + '/public/log.html';
if (fs.existsSync(logFile)) {
  fs.unlinkSync(logFile);
}

function log(text) {
  const logText = `[${new Date().toLocaleString()}] ${text}`;
  fs.appendFile(logFile, `${logText}${os.EOL}`, "utf-8", () => { });
  console.log(logText);
}

app.use(basicAuth({
  users: { "aduser": "wsmetrics" },
  challenge: true,
  realm: 'Imb4T3st4pp',
}))

app.get('/ws/projects', function (req, res) {
  fs.readFile( __dirname + "/data/projects.json", 'utf8', function (err, data) {
     res.end( data );
  });
});

app.get('/ws/projects/GenApp/metrics', function (req, res) {
  fs.readFile( __dirname + "/data/GenApp/metrics.json", 'utf8', function (err, data) {
     res.end( data );
  });
});

app.get('/ws/projects/GenApp/artifacts', function (req, res) {
  fs.readFile( __dirname + "/data/GenApp/artifacts.json", 'utf8', function (err, data) {
     res.end( data );
  });
});

// listen for requests :)
var listener = app.listen(port, function () {
  log('Listening on port ' + port);
});
