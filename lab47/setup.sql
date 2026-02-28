CREATE DATABASE my_database;
CREATE USER my_user WITH PASSWORD '111';
GRANT ALL PRIVILEGES ON DATABASE my_database TO my_user;
\c my_database
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100) UNIQUE
);
INSERT INTO users (name, email) VALUES
('Alice', 'alice@example.com'),
SELECT * FROM users;