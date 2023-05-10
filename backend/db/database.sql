CREATE DATABASE IF NOT EXISTS tecladb;

USE tecladb;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50),
    birthdate DATE,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    city VARCHAR(100),
    country VARCHAR(100),
    profile_picture VARCHAR(100),
    PRIMARY KEY (id)
);

CREATE TABLE friends (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    friend_id INT NOT NULL,
    friendship_date DATE NOT NULL,
    request_status VARCHAR(50) NOT NULL DEFAULT 'accepted',
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (friend_id) REFERENCES users(id)
);

CREATE TABLE posts (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    text VARCHAR(280) NOT NULL,
    post_date DATETIME NOT NULL,
    num_likes INT NOT NULL DEFAULT 0,
    num_comments INT NOT NULL DEFAULT 0,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE comments (
    id INT NOT NULL AUTO_INCREMENT,
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    text VARCHAR(280) NOT NULL,
    comment_date DATETIME NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE messages (
    id INT NOT NULL AUTO_INCREMENT,
    sender_id INT NOT NULL,
    recipient_id INT NOT NULL,
    text VARCHAR(500) NOT NULL,
    message_date DATETIME NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (sender_id) REFERENCES users(id),
    FOREIGN KEY (recipient_id) REFERENCES users(id)
);

CREATE TABLE notifications (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    notification_type VARCHAR(50) NOT NULL,
    text VARCHAR(280) NOT NULL,
    notification_date DATETIME NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);


INSERT INTO users (name, email, password, profile_picture)
VALUES ('David', 'Dxworld@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', "frodo.jpg");

INSERT INTO users (name, email, password, profile_picture)
VALUES ('Sonia', 'bueno.g.sonia@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', "mononoke.jpg");

INSERT INTO users (name, email, password, profile_picture)
VALUES ('Alejandro', 'apedrerovega@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', "kodama.jpg");

INSERT INTO users (name, email, password, profile_picture)
VALUES ('Scott', 'disastercollie@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', "border-collie.jpg");

INSERT INTO users (name, email, password, profile_picture)
VALUES ('Gal', 'gal@outlook.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', "gal-gadot.webp");

