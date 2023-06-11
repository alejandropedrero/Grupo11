CREATE DATABASE IF NOT EXISTS tecladb;

USE tecladb;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    birthdate VARCHAR(50),
    linkedin VARCHAR(100),
    time_availability VARCHAR(20),
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    city VARCHAR(100),
    country VARCHAR(100),
    profile_picture VARCHAR(100),
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

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2, profile_picture)
VALUES ('Bill Kilgore', 'billkilgore@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Tarde', 'Detroit', 'USA', 'Manipulador de alimentos', 'Windows 98', 'Armenio', 'Tailandés', 'Patrullar', 'Cocinar por la mañana', 'https://i.postimg.cc/2jZHdmzD/1.jpg');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2, profile_picture)
VALUES ('Dale Cooper', 'dalecooper@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball', 'https://i.postimg.cc/x83pKyLZ/2.jpg');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2, profile_picture)
VALUES ('Indiana Jones', 'indianajones@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball', 'https://i.postimg.cc/rFYC7PyJ/3.jpg');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2, profile_picture)
VALUES ('The Terminator', 'terminator@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball', 'https://i.postimg.cc/QNYTMWLN/4.jpg');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2, profile_picture)
VALUES ('Audrey Hepburn', 'audreyhepburn@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball', 'https://i.postimg.cc/pdkd1gRV/5.jpg');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2, profile_picture)
VALUES ('Martin Luther King', 'lutherking@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball', 'https://i.postimg.cc/pdd9x205/6.jpg');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2, profile_picture)
VALUES ('Napoleon Bonaparte', 'napoleonbonaparte@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball', 'https://i.postimg.cc/DydmXWHb/7.jpg');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2, profile_picture)
VALUES ('Bill Bryson', 'billbryson@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball', 'https://i.postimg.cc/y8863L0w/8.jpg');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2, profile_picture)
VALUES ('Alexander Skarsgard', 'alexanderskarsgard@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball', 'https://i.postimg.cc/8zYGJNp6/9.jpg');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2, profile_picture)
VALUES ('Chuck Palahniuk', 'chucky@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball', 'https://i.postimg.cc/mr9vP9pv/10.jpg');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2, profile_picture)
VALUES ('Ingrid Bergman', 'ingrid@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball', 'https://i.postimg.cc/Gtg773SP/11.jpg');
	
INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2, profile_picture)
VALUES ('Paul Newman', 'paulnewman@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball', 'https://i.postimg.cc/L8pCxWxb/12.jpg');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2, profile_picture)
VALUES ('Aubrey Plaza', 'aubreyplaza@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball', 'https://i.postimg.cc/QdfQcYw5/13.jpg');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2, profile_picture)
VALUES ('Jacinto Antón', 'jacinto@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball', 'https://i.postimg.cc/VNSCnfjQ/14.jpg');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2, profile_picture)
VALUES ('John Cassavetes', 'cassavetes@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball', 'https://i.postimg.cc/Vk26yjbp/15.jpg');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2, profile_picture)
VALUES ('Monica Vitti', 'vitti@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball', 'https://i.postimg.cc/wxsYPSkq/16.jpg');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2, profile_picture)
VALUES ('Michael Jordan', 'jordan@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball', 'https://i.postimg.cc/Wz0K3c90/17.jpg');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2, profile_picture)
VALUES ('Vinícius Júnior', 'vinijr@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball', 'https://i.postimg.cc/5N1K3G7k/18.jpg');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2, profile_picture)
VALUES ('Mahatma Gandhi', 'gandhi@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball', 'https://i.postimg.cc/xCMgGyK2/19.jpg');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2, profile_picture)
VALUES ('Diego Velázquez', 'menino@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball', 'https://i.postimg.cc/NFx4SsJC/20.jpg');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2, profile_picture)
VALUES ('Sonia Bueno', 'bueno.g.sonia@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball', 'https://i.postimg.cc/qvqLDd8Q/21.jpg');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2, profile_picture)
VALUES ('Alejandro Pedrero', 'apedrerovega@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball', 'https://i.postimg.cc/BbJ5TWST/22.jpg');

CREATE TABLE jobs (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    job VARCHAR(50),
    job_company VARCHAR(50),
    job_end VARCHAR(20), 
    job_start VARCHAR(20),
    FOREIGN KEY (user_id) REFERENCES users(id),
    PRIMARY KEY (id)
);

INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('1', 'Sargento', 'Marine Corps', '06/2013', '06/2012');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('1', 'Teniente', 'Army Rangers', '01/1980', '01/1979');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('1', 'Cabo', 'Reservists', '02/2004', '02/2001');

INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('2', 'Special Agent', 'FBI', '06/2013', '06/2012');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('2', 'Ayudante de cocina', 'Marine Corps', '01/1980', '01/1979');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('2',  'Investigador', 'CIA', '02/2004', '02/2001');

INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('3', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('3', 'Profesor', 'USA Schools', '01/1980', '01/1979');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('3', 'Investigador', 'CIA', '02/2004', '02/2001');

INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('4', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('4', 'Profesor', 'USA Schools', '01/1980', '01/1979');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('4', 'Investigador', 'CIA', '02/2004', '02/2001');

INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('5', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('5', 'Profesor', 'USA Schools', '01/1980', '01/1979');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('5', 'Investigador', 'CIA', '02/2004', '02/2001');

INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('6', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('6', 'Profesor', 'USA Schools', '01/1980', '01/1979');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('6', 'Investigador', 'CIA', '02/2004', '02/2001');

INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('7', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('7', 'Profesor', 'USA Schools', '01/1980', '01/1979');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('7', 'Investigador', 'CIA', '02/2004', '02/2001');

INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('8', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('8', 'Profesor', 'USA Schools', '01/1980', '01/1979');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('8', 'Investigador', 'CIA', '02/2004', '02/2001');

INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('9', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('9', 'Profesor', 'USA Schools', '01/1980', '01/1979');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('9', 'Investigador', 'CIA', '02/2004', '02/2001');

INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('10', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('10', 'Profesor', 'USA Schools', '01/1980', '01/1979');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('10', 'Investigador', 'CIA', '02/2004', '02/2001');

INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('11', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('11', 'Profesor', 'USA Schools', '01/1980', '01/1979');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('11', 'Investigador', 'CIA', '02/2004', '02/2001');

INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('12', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('12', 'Profesor', 'USA Schools', '01/1980', '01/1979');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('12', 'Investigador', 'CIA', '02/2004', '02/2001');

INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('13', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('13', 'Profesor', 'USA Schools', '01/1980', '01/1979');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('13', 'Investigador', 'CIA', '02/2004', '02/2001');

INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('14', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('14', 'Profesor', 'USA Schools', '01/1980', '01/1979');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('14', 'Investigador', 'CIA', '02/2004', '02/2001');

INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('15', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('15', 'Profesor', 'USA Schools', '01/1980', '01/1979');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('15', 'Investigador', 'CIA', '02/2004', '02/2001');

INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('16', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('16', 'Profesor', 'USA Schools', '01/1980', '01/1979');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('16', 'Investigador', 'CIA', '02/2004', '02/2001');

INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('17', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('17', 'Profesor', 'USA Schools', '01/1980', '01/1979');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('17', 'Investigador', 'CIA', '02/2004', '02/2001');

INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('18', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('18', 'Profesor', 'USA Schools', '01/1980', '01/1979');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('18', 'Investigador', 'CIA', '02/2004', '02/2001');

INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('19', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('19', 'Profesor', 'USA Schools', '01/1980', '01/1979');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('19', 'Investigador', 'CIA', '02/2004', '02/2001');

INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('20', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('20', 'Profesor', 'USA Schools', '01/1980', '01/1979');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('20', 'Investigador', 'CIA', '02/2004', '02/2001');

INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('21', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('21', 'Profesor', 'USA Schools', '01/1980', '01/1979');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('21', 'Investigador', 'CIA', '02/2004', '02/2001');

INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('22', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('22', 'Profesor', 'USA Schools', '01/1980', '01/1979');
INSERT INTO jobs (user_id, job, job_company, job_end, job_start)
VALUES ('22', 'Investigador', 'CIA', '02/2004', '02/2001');

CREATE TABLE education (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    education VARCHAR(50),
    education_institution VARCHAR(50),
    education_end VARCHAR(20),
    FOREIGN KEY (user_id) REFERENCES users(id),
    PRIMARY KEY (id)
);

INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('1', 'FP Taxidermia', 'Universidad Laboral', '03/2003');
INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('1', 'Máster de Educación', 'IES Clarín', '01/1998');

INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('2', 'FP Investigaciones', 'Texas College', '03/2003');
INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('2', 'Máster de Marketing', 'School of Austin', '01/1998');

INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('3', 'FP Recolector', 'Texas College', '03/2003');
INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('3', 'Máster de Marketing', 'School of Austin', '01/1998');

INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('4', 'FP Recolector', 'Texas College', '03/2003');
INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('4', 'Máster de Marketing', 'School of Austin', '01/1998');

INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('5', 'FP Recolector', 'Texas College', '03/2003');
INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('5', 'Máster de Marketing', 'School of Austin', '01/1998');

INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('6', 'FP Recolector', 'Texas College', '03/2003');
INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('6', 'Máster de Marketing', 'School of Austin', '01/1998');

INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('7', 'FP Recolector', 'Texas College', '03/2003');
INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('7', 'Máster de Marketing', 'School of Austin', '01/1998');

INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('8', 'FP Recolector', 'Texas College', '03/2003');
INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('8', 'Máster de Marketing', 'School of Austin', '01/1998');

INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('9', 'FP Recolector', 'Texas College', '03/2003');
INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('9', 'Máster de Marketing', 'School of Austin', '01/1998');

INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('10', 'FP Recolector', 'Texas College', '03/2003');
INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('10', 'Máster de Marketing', 'School of Austin', '01/1998');

INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('11', 'FP Recolector', 'Texas College', '03/2003');
INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('11', 'Máster de Marketing', 'School of Austin', '01/1998');

INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('12', 'FP Recolector', 'Texas College', '03/2003');
INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('12', 'Máster de Marketing', 'School of Austin', '01/1998');

INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('13', 'FP Recolector', 'Texas College', '03/2003');
INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('13', 'Máster de Marketing', 'School of Austin', '01/1998');

INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('14', 'FP Recolector', 'Texas College', '03/2003');
INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('14', 'Máster de Marketing', 'School of Austin', '01/1998');

INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('15', 'FP Recolector', 'Texas College', '03/2003');
INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('15', 'Máster de Marketing', 'School of Austin', '01/1998');

INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('16', 'FP Recolector', 'Texas College', '03/2003');
INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('16', 'Máster de Marketing', 'School of Austin', '01/1998');

INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('17', 'FP Recolector', 'Texas College', '03/2003');
INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('17', 'Máster de Marketing', 'School of Austin', '01/1998');

INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('18', 'FP Recolector', 'Texas College', '03/2003');
INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('18', 'Máster de Marketing', 'School of Austin', '01/1998');

INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('19', 'FP Recolector', 'Texas College', '03/2003');
INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('19', 'Máster de Marketing', 'School of Austin', '01/1998');

INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('20', 'FP Recolector', 'Texas College', '03/2003');
INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('20', 'Máster de Marketing', 'School of Austin', '01/1998');

INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('21', 'FP Recolector', 'Texas College', '03/2003');
INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('21', 'Máster de Marketing', 'School of Austin', '01/1998');

INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('22', 'FP Recolector', 'Texas College', '03/2003');
INSERT INTO education (user_id, education, education_institution, education_end)
VALUES ('22', 'Máster de Marketing', 'School of Austin', '01/1998');

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

INSERT INTO posts (id, user_id, text, post_date, num_likes, num_comments)
VALUES (1, 1, 'Me encanta el olor del napalm por la mañana', '2023-06-01 15:59:00', 0, 0);

INSERT INTO posts (id, user_id, text, post_date, num_likes, num_comments)
VALUES (2, 2, 'Hazte un regalo todos los días a ti mismo. No lo planees, no esperes por él, solo hazlo', '2023-06-01 15:59:01', 0, 0);

INSERT INTO posts (id, user_id, text, post_date, num_likes, num_comments)
VALUES (3, 3, '¿Llamas a esto arqueología?', '2023-06-01 15:59:02', 0, 0);

INSERT INTO posts (id, user_id, text, post_date, num_likes, num_comments)
VALUES (4, 4, 'Sayonara, baby', '2023-06-01 15:59:04', 0, 0);

INSERT INTO posts (id, user_id, text, post_date, num_likes, num_comments)
VALUES (5, 5, 'Plantar un jardín es creer en el mañana', '2023-06-01 15:59:05', 0, 0);

INSERT INTO posts (id, user_id, text, post_date, num_likes, num_comments)
VALUES (6, 6, 'Tengo un sueño...', '2023-06-01 15:59:06', 0, 0);

INSERT INTO posts (id, user_id, text, post_date, num_likes, num_comments)
VALUES (7, 7, 'En la guerra como en el amor, para acabar es necesario verse de cerca', '2023-06-01 15:59:07', 0, 0);

INSERT INTO posts (id, user_id, text, post_date, num_likes, num_comments)
VALUES (8, 8, 'Los pequeños detalles son los que realmente marcan la diferencia entre el éxito y el fracaso', '2023-06-01 15:59:08', 0, 0);

INSERT INTO posts (id, user_id, text, post_date, num_likes, num_comments)
VALUES (9, 9, 'Como actor, lo interesante es lo que se esconde debajo de la superficie', '2023-06-01 15:59:09', 0, 0);

INSERT INTO posts (id, user_id, text, post_date, num_likes, num_comments)
VALUES (10, 10, 'La primera regla del Club de la Lucha es: Nadie habla sobre el Club de la Lucha', '2023-06-01 15:59:10', 0, 0);

INSERT INTO posts (id, user_id, text, post_date, num_likes, num_comments)
VALUES (11, 11, 'Para ser feliz basta con tener buena salud y mala memoria', '2023-06-01 15:59:11', 0, 0);

INSERT INTO posts (id, user_id, text, post_date, num_likes, num_comments)
VALUES (12, 12, 'Un hombre sin enemigos es un hombre sin carácter', '2023-06-01 15:59:12', 0, 0);

INSERT INTO posts (id, user_id, text, post_date, num_likes, num_comments)
VALUES (13, 13, 'Soy un desastre totalmente ansiosa todo el tiempo. Hay un diálogo constante en mi cerebro, y solo me recuerda todos los fracasos que he tenido, y todas las cosas que necesito hacer, y todas las cosas que no estoy haciendo lo suficientemente bien', '2023-06-01 15:59:13', 0, 0);

INSERT INTO posts (id, user_id, text, post_date, num_likes, num_comments)
VALUES (14, 14, 'La gran aventura no sirve de nada si no sabes contarla', '2023-06-01 15:59:14', 0, 0);

INSERT INTO posts (id, user_id, text, post_date, num_likes, num_comments)
VALUES (15, 15, 'Siempre he podido trabajar con cualquiera que no deseara éxito', '2023-06-01 15:59:15', 0, 0);

INSERT INTO posts (id, user_id, text, post_date, num_likes, num_comments)
VALUES (16, 16, 'Las actrices, digamos feúchas, que tanto éxito tienen en Italia hoy, me lo deben a mí. Yo fui quién echó la puerta abajo', '2023-06-01 15:59:16', 0, 0);

INSERT INTO posts (id, user_id, text, post_date, num_likes, num_comments)
VALUES (17, 17, 'El talento gana juegos, pero el trabajo en equipo y la inteligencia ganan campeonatos', '2023-06-01 15:59:17', 0, 0);

INSERT INTO posts (id, user_id, text, post_date, num_likes, num_comments)
VALUES (18, 18, 'La luz que me guía es mucho más fuerte que los ojos que me rodean', '2023-06-01 15:59:18', 0, 0);

INSERT INTO posts (id, user_id, text, post_date, num_likes, num_comments)
VALUES (19, 19, 'No hay camino para la paz, la paz es el camino', '2023-06-01 15:59:19', 0, 0);

INSERT INTO posts (id, user_id, text, post_date, num_likes, num_comments)
VALUES (20, 20, 'Considérate viejo cuando tengas más recuerdos que sueños', '2023-06-01 15:59:20', 0, 0);

CREATE TABLE liked_posts (
  id INT NOT NULL AUTO_INCREMENT,
  post_id INT NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (post_id) REFERENCES posts(id),
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

CREATE TABLE feedback (
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



