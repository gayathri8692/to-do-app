const db = require('../db/config');
const Todo = {};


Todo.findAll = () => {
  return db.query('SELECT * FROM todo_app ORDER BY id ASC');
};

Todo.findById = id => {
  return db.oneOrNone('SELECT * FROM todo_app where id = $1', [id]);
};

Todo.create = todo => {
  return db.one(
  `
    INSERT INTO todo_app
    (title, todo_description)
    VALUES ($1, $2) RETURNING *
  `,
  [todo.title, todo.todo_description]
  );
};

Todo.update = (todo, id) => {
  console.log('update');
  return db.none(
    `
      UPDATE todo_app SET
      title = $1,
      todo_description = $2
      WHERE id = $3
    `,
    [todo.title, todo.todo_description, id]
  );
};

Todo.destroy = id => {
  return db.none(
    `
      DELETE FROM todo_app
      WHERE id = $1
    `,
    [id]
  );
};

module.exports = Todo;