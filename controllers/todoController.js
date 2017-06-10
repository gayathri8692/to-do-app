const Todo = require('../models/to-do');

const controller = {};

controller.index = (req, res) => {
  Todo.findAll()
  .then(todo => {
    res.render('todo_app/todo-index', {
      documentTitle: 'Sky notes app',
      todoData: todo,
    });
  })
  .catch(err => {
    res.status(400).json(err);
  })
};

controller.show = (req, res) => {
  Todo.findById(req.params.id)
  .then(todo => {
    res.render('todo_app/todo-single', {
      documentTitle: 'Sky notes app',
      todo: todo
    });
  })
  .catch(err => {
    res.status(400).json(err);
  });
};

controller.create = (req, res) => {
  Todo.create({
    title: req.body.title,
    todo_description: req.body.todo_description,
  })
  .then(quote => {
    res.redirect('/todo');
  })
  .catch(err => {
    res.status(400).json(err);
  });
};

controller.edit = (req, res) => {
  Todo.findById(req.params.id)
  .then(todo => {
    res.render('todo_app/todo-edit', {
      documentTitle: 'Sky notes app',
      todo: todo,
      id: req.params.id,
    });
  })
  .catch(err => {
    //res.status(400).json(err);
  });
};

controller.update = (req, res) => {
  console.log(req.body);
  Todo.update({
    title: req.body.title,
    todo_description: req.body.todo_description,
  }, req.params.id)
  .then(quote => {
    res.redirect('/todo');
  })
  .catch(err => {
    console.log(err);
    res.status(400).json(err);
  });
};

controller.destroy = (req, res) => {
  Todo.destroy(req.params.id)
  .then(() => {
    res.redirect('/todo');
  })
  .catch(err => {
    res.status(400).json(err);
  });
};

module.exports = controller;
