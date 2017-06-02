const tasks = require('./tasks.js'),
bodyparser = require('body-parser');

module.exports = function(app){

  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded());
  
  app.get('/api/getTasks', tasks.getTasks);
  app.get('/api/getTask', tasks.getTask);
  app.post('/api/createTask', tasks.createTask);
}
