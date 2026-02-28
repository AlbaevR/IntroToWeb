CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    full_name TEXT NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    birth_date DATE NOT NULL,
    is_active BOOLEAN DEFAULT TRUE
);
SELECT * FROM users;

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
SELECT * FROM products;

DROP TABLE IF EXISTS products;


ALTER TABLE users ADD COLUMN phone_number VARCHAR(20);
SELECT phone_number FROM users;

ALTER TABLE users DROP COLUMN phone_number;

ALTER TABLE users RENAME COLUMN full_name TO name;
SELECT name FROM users;

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE products ALTER COLUMN price TYPE INTEGER USING price::INTEGER;
SELECT * FROM products;