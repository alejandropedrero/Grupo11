CREATE DATABASE IF NOT EXISTS tecladb;

USE tecladb;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    birthdate DATE,
    linkedin VARCHAR(100),
    time_availability VARCHAR(20),
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    city VARCHAR(100),
    country VARCHAR(100),
    profile_picture VARCHAR(100),
    job_1 VARCHAR(50),
    job_1_company VARCHAR(50),
    job_1_end VARCHAR(20), 
    job_1_start VARCHAR(20), 
    job_2 VARCHAR(50),
    job_2_company VARCHAR(50),
    job_2_end VARCHAR(20),
    job_2_start VARCHAR(20),
    job_3 VARCHAR(50),
    job_3_company VARCHAR(50),
    job_3_end VARCHAR(20),
    job_3_start VARCHAR(20),
    education_1 VARCHAR(50),
    education_1_institution VARCHAR(50),
    education_1_end VARCHAR(20),
    education_2 VARCHAR(50),
    education_2_institution VARCHAR(50),
    education_2_end VARCHAR(20),
    cert_1 VARCHAR(50),
    cert_2 VARCHAR(50),
    lang_1 VARCHAR(50),
    lang_2 VARCHAR(50),
    hobby_1 VARCHAR(50),
    hobby_2 VARCHAR(50), 
    PRIMARY KEY (id)
);

CREATE TABLE friends (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    friend_id INT NOT NULL,
    friendship_date DATE NOT NULL,
    request_status VARCHAR(50),
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (friend_id) REFERENCES users(id)
);

INSERT INTO users (name, email, password)
VALUES ('Bill', 'billkilgore@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S');

INSERT INTO users (name, email, password)
VALUES ('Dale', 'dalecooper@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S');

INSERT INTO users (name, email, password)
VALUES ('Indy', 'indianajones@outlook.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S');

INSERT INTO users (name, email, password)
VALUES ('Terminator', 'theterminator@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S');

INSERT INTO users (name, email, password)
VALUES ('Audrey', 'audreyhepburn@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S');

INSERT INTO users (name, email, password)
VALUES ('Martin', 'lutherking@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S');

INSERT INTO users (name, email, password)
VALUES ('Napoleón', 'bonaparte@outlook.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S');

INSERT INTO users (name, email, password)
VALUES ('Bryson', 'billbryson@hotmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S');

INSERT INTO users (name, email, password)
VALUES ('Alexander', 'skarsgard@hotmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S');

INSERT INTO users (name, email, password)
VALUES ('Chuck', 'palahniuk@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S');

INSERT INTO users (name, email, password)
VALUES ('Ingrid', 'ingridbergman@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S');

INSERT INTO users (name, email, password)
VALUES ('Paul', 'paulnewman@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S');

INSERT INTO users (name, email, password)
VALUES ('Aubrey', 'plaza@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S');

INSERT INTO users (name, email, password)
VALUES ('Jacinto', 'jacintoanton@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S');

INSERT INTO users (name, email, password)
VALUES ('Cassavetes', 'johncassavetes@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S');

INSERT INTO users (name, email, password)
VALUES ('Monica', 'monicavitti@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S');

INSERT INTO users (name, email, password)
VALUES ('Jordan', 'michaeljordan@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S');

INSERT INTO users (name, email, password)
VALUES ('Vinícius', 'vinijr@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S');


INSERT INTO users (name, email, password)
VALUES ('Gandhi', 'mahatmagandhi@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S');

INSERT INTO users (name, email, password)
VALUES ('Velázquez', 'diegovelazquez@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S');

INSERT INTO users (name, email, password)
VALUES ('Sonia', 'bueno.g.sonia@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S');

INSERT INTO users (name, email, password)
VALUES ('Alejandro', 'apedrerovega@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S');

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

CREATE TABLE ticket (
    id INT NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(280),
    consulta TEXT,
    PRIMARY KEY (id)
);



