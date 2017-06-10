CREATE TABLE todo_app (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255),
  todo_description VARCHAR(1024)
  );


INSERT INTO todo_app (title, todo_description) VALUES 

('Shopping', 'Buy Ankle Boots'),
('Alarm', 'Wake me up at 6');