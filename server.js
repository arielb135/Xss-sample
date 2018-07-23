const express = require('express');
var bodyParser = require('body-parser');
const app = express();

var globalvar = '{name: maw}';

app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/myaction', function(req, res) {
        globalvar = req.body;
        res.sendStatus(200);
  });

  app.get('/myaction', function(req, res)
  {   
      res.send(globalvar);
  });

// from top level path e.g. localhost:3000, this response will be sent
app.get('/', function(req, res)
    {   
        res.sendfile('body.html');
    }
);

// set the server to listen on port 3000
app.listen(3000, () => console.log('Listening on port 3000'));