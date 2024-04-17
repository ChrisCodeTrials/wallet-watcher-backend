-- db/seed.sql
\c walletwatchdb

INSERT INTO users (username, password_hash, email, created_at, updated_at)
VALUES 
('demo', '$2b$10$.z68x3792U9LyBwmghfsKexstMO7i0SeNCoDmeJa7bEFPQBnZU3bK', 'demo@example.com', NOW(), NOW()),
('coinGuy123', 'password1', 'coinguy123@example.com', NOW(), NOW()),
('HODLking', 'password2', 'hodlking@example.com', NOW(), NOW()),
('JustBob', 'password3', 'justbob@example.com', NOW(), NOW());


INSERT INTO coins (symbol, name, coin_address, market_cap) 
VALUES 
('SOL', 'Solana', 'So11111111111111111111111111111111111111112', '84886851750.01897'),
('MEW', 'MEW', 'MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5', '407172712.1181677'),
('JUP', 'Jupiter', 'JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN', '10456132227.568253');


INSERT INTO watchlist (user_id, coin_id, notes) 
VALUES 
(1, 1, 'Keep an eye on the price'),
(2, 2, 'Interested in recent developments'),
(3, 3, 'Potential investment opportunity');


INSERT INTO owned_coins (coin_id, user_id) 
VALUES 
(1, 1),
(2, 2),
(3, 3);
