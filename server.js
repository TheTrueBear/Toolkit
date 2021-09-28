const http = require('http');
const fs   = require('fs');
const port = 3000;

// Users
var clients = []
var clientNames = []

const server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.readFile('public/index.html', function(error, data) {
    if (error) {
      res.writeHead(404);
      res.write("File not found! Does it exist?");
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, function(error) {
  if (error) {
    console.log("Sorry, something went wrong! Error: ", error);
  } else {
    console.log("Listening on port ", port);
  }
});
