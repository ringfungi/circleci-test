const http = require('http');
const express = require('express');
const path = require('path');const app = express();
app.use(express.json());
app.use(express.static("express"));// default URL for website
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/express/index.html'));
    //__dirname : It will resolve to your project folder.
  });
const server = http.createServer(app);
server.listen(process.env.PORT || 5000, '0.0.0.0');
if (process.env.PORT ) {
  console.debug('Server listening on port ' + process.env.PORT);
} else {
  console.debug('Server listening on port 5000');
}
