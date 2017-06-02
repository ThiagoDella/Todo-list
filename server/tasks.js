const tasks = function(){};

var taskRepo = [
  {
    creator : "Thiago Moreira",
    text    : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  },
  {
    creator : "John Doe",
    text    : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  },
];

tasks.prototype.getTasks = function (req,res) {
  res.json(taskRepo);
};

tasks.prototype.getTask = function (req,res) {
  var index = req.query.index;
  res.json(taskRepo[index]);
};


tasks.prototype.createTask = function (req,res) {
  var size = taskRepo.length;
  taskRepo.push(
    {
      creator : req.body.creator,
      text    : req.body.text
    }
  );

  if (size < taskRepo.length) res.json({message : "Task was successfully added." , success : true});
  else res.json({message : "Task wasn't successfully added." , success : false});


};

module.exports = new tasks();
