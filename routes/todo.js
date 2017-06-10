const express = require('express');
const controller = require('../controllers/todoController');
const todoRoutes = express.Router();

todoRoutes.get('/', controller.index);
todoRoutes.get('/add', (req, res) => {
  res.render('todo_app/todo-add', {
    documentTitle: 'Sky notes app',
  });
});

todoRoutes.get('/:id', controller.show);
todoRoutes.get('/edit/:id', controller.edit);
todoRoutes.post('/', controller.create);
todoRoutes.put('/:id', controller.update);
todoRoutes.delete('/:id', controller.destroy);

module.exports = todoRoutes;