const express = require('express'),
app = express(),
port = 3000,
routes = require('./server/routes.js')(app);



/*
  Starting a server
*/
app.listen(port, function() {
  console.log("========== Server started using PORT " + port + " ==========");
});
