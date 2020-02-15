const express = require('express'),
      morgan = require('morgan');
server = express();

server.use(morgan('dev'));

server.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})

server.get('/data/all.geojson', function(req, res) {
  res.sendFile(__dirname + '/data/all.geojson');
})

server.listen(process.env.PORT || 3000, function() {
  console.log('Server listening on port 3000');
});
