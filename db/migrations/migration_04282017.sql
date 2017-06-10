
\connect todo_list 

CREATE TABLE IF NOT EXISTS todo_app (
id BIGSERIAL PRIMARY KEY,
title VARCHAR(255),
todo_description VARCHAR(1024)
);                            