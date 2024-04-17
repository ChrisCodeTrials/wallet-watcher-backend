-- db/schema.sql
DROP DATABASE IF EXISTS walletwatchdb;

CREATE DATABASE walletwatchdb;

\c walletwatchdb

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    password_hash VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE coins (
    id SERIAL PRIMARY KEY,
    symbol VARCHAR,
    name VARCHAR,
    coin_address VARCHAR,
    market_cap NUMERIC
);

CREATE TABLE watchlist (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    coin_id INTEGER REFERENCES coins(id),
    notes VARCHAR
);

CREATE TABLE owned_coins (
  id SERIAL PRIMARY KEY,
  coin_id INTEGER REFERENCES coins(id),
  user_id INTEGER REFERENCES users(id)
);

