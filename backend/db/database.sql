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

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, job_1, job_1_company, job_1_end, job_1_start, job_2, job_2_company, job_2_end, job_2_start, job_3, job_3_company, job_3_end, job_3_start, education_1, education_1_institution, education_1_end, education_2, education_2_institution, education_2_end, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2)
VALUES ('Bill Kilgore', 'billkilgore@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Tarde', 'Detroit', 'USA', 'Sargento', 'Marine Corps', '06/2013', '06/2012', 'Teniente', 'Army Rangers', '01/1980', '01/1979', 'Cabo', 'Reservists', '02/2004', '02/2001', 'FP Taxidermia', 'Universidad Laboral', '03/2003', 'Máster de Educación', 'IES Clarín', '01/1998', 'Manipulador de alimentos', 'Windows 98', 'Armenio', 'Tailandés', 'Patrullar', 'Cocinar por la mañana');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, job_1, job_1_company, job_1_end, job_1_start, job_2, job_2_company, job_2_end, job_2_start, job_3, job_3_company, job_3_end, job_3_start, education_1, education_1_institution, education_1_end, education_2, education_2_institution, education_2_end, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2)
VALUES ('Dale Cooper', 'dalecooper@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'Special Agent', 'FBI', '06/2013', '06/2012', 'Ayudante de cocina', 'Marine Corps', '01/1980', '01/1979', 'Investigador', 'CIA', '02/2004', '02/2001', 'FP Investigaciones', 'Texas College', '03/2003', 'Máster de Marketing', 'School of Austin', '01/1998', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, job_1, job_1_company, job_1_end, job_1_start, job_2, job_2_company, job_2_end, job_2_start, job_3, job_3_company, job_3_end, job_3_start, education_1, education_1_institution, education_1_end, education_2, education_2_institution, education_2_end, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2)
VALUES ('Indiana Jones', 'indianajones@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012', 'Profesor', 'USA Schools', '01/1980', '01/1979', 'Investigador', 'CIA', '02/2004', '02/2001', 'FP Recolector', 'Texas College', '03/2003', 'Máster de Marketing', 'School of Austin', '01/1998', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, job_1, job_1_company, job_1_end, job_1_start, job_2, job_2_company, job_2_end, job_2_start, job_3, job_3_company, job_3_end, job_3_start, education_1, education_1_institution, education_1_end, education_2, education_2_institution, education_2_end, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2)
VALUES ('The Terminator', 'terminator@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012', 'Profesor', 'USA Schools', '01/1980', '01/1979', 'Investigador', 'CIA', '02/2004', '02/2001', 'FP Recolector', 'Texas College', '03/2003', 'Máster de Marketing', 'School of Austin', '01/1998', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, job_1, job_1_company, job_1_end, job_1_start, job_2, job_2_company, job_2_end, job_2_start, job_3, job_3_company, job_3_end, job_3_start, education_1, education_1_institution, education_1_end, education_2, education_2_institution, education_2_end, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2)
VALUES ('Audrey Hepburn', 'audreyhepburn@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012', 'Profesor', 'USA Schools', '01/1980', '01/1979', 'Investigador', 'CIA', '02/2004', '02/2001', 'FP Recolector', 'Texas College', '03/2003', 'Máster de Marketing', 'School of Austin', '01/1998', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, job_1, job_1_company, job_1_end, job_1_start, job_2, job_2_company, job_2_end, job_2_start, job_3, job_3_company, job_3_end, job_3_start, education_1, education_1_institution, education_1_end, education_2, education_2_institution, education_2_end, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2)
VALUES ('Martin Luther King', 'lutherking@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012', 'Profesor', 'USA Schools', '01/1980', '01/1979', 'Investigador', 'CIA', '02/2004', '02/2001', 'FP Recolector', 'Texas College', '03/2003', 'Máster de Marketing', 'School of Austin', '01/1998', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, job_1, job_1_company, job_1_end, job_1_start, job_2, job_2_company, job_2_end, job_2_start, job_3, job_3_company, job_3_end, job_3_start, education_1, education_1_institution, education_1_end, education_2, education_2_institution, education_2_end, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2)
VALUES ('Napoleon Bonaparte', 'napoleonbonaparte@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012', 'Profesor', 'USA Schools', '01/1980', '01/1979', 'Investigador', 'CIA', '02/2004', '02/2001', 'FP Recolector', 'Texas College', '03/2003', 'Máster de Marketing', 'School of Austin', '01/1998', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, job_1, job_1_company, job_1_end, job_1_start, job_2, job_2_company, job_2_end, job_2_start, job_3, job_3_company, job_3_end, job_3_start, education_1, education_1_institution, education_1_end, education_2, education_2_institution, education_2_end, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2)
VALUES ('Bill Bryson', 'billbryson@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012', 'Profesor', 'USA Schools', '01/1980', '01/1979', 'Investigador', 'CIA', '02/2004', '02/2001', 'FP Recolector', 'Texas College', '03/2003', 'Máster de Marketing', 'School of Austin', '01/1998', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, job_1, job_1_company, job_1_end, job_1_start, job_2, job_2_company, job_2_end, job_2_start, job_3, job_3_company, job_3_end, job_3_start, education_1, education_1_institution, education_1_end, education_2, education_2_institution, education_2_end, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2)
VALUES ('Alexander Skarsgard', 'alexanderskarsgard@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012', 'Profesor', 'USA Schools', '01/1980', '01/1979', 'Investigador', 'CIA', '02/2004', '02/2001', 'FP Recolector', 'Texas College', '03/2003', 'Máster de Marketing', 'School of Austin', '01/1998', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, job_1, job_1_company, job_1_end, job_1_start, job_2, job_2_company, job_2_end, job_2_start, job_3, job_3_company, job_3_end, job_3_start, education_1, education_1_institution, education_1_end, education_2, education_2_institution, education_2_end, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2)
VALUES ('Chuck Palahniuk', 'chucky@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012', 'Profesor', 'USA Schools', '01/1980', '01/1979', 'Investigador', 'CIA', '02/2004', '02/2001', 'FP Recolector', 'Texas College', '03/2003', 'Máster de Marketing', 'School of Austin', '01/1998', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, job_1, job_1_company, job_1_end, job_1_start, job_2, job_2_company, job_2_end, job_2_start, job_3, job_3_company, job_3_end, job_3_start, education_1, education_1_institution, education_1_end, education_2, education_2_institution, education_2_end, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2)
VALUES ('Ingrid Bergman', 'ingrid@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012', 'Profesor', 'USA Schools', '01/1980', '01/1979', 'Investigador', 'CIA', '02/2004', '02/2001', 'FP Recolector', 'Texas College', '03/2003', 'Máster de Marketing', 'School of Austin', '01/1998', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball');
	
INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, job_1, job_1_company, job_1_end, job_1_start, job_2, job_2_company, job_2_end, job_2_start, job_3, job_3_company, job_3_end, job_3_start, education_1, education_1_institution, education_1_end, education_2, education_2_institution, education_2_end, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2)
VALUES ('Paul Newman', 'paulnewman@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012', 'Profesor', 'USA Schools', '01/1980', '01/1979', 'Investigador', 'CIA', '02/2004', '02/2001', 'FP Recolector', 'Texas College', '03/2003', 'Máster de Marketing', 'School of Austin', '01/1998', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, job_1, job_1_company, job_1_end, job_1_start, job_2, job_2_company, job_2_end, job_2_start, job_3, job_3_company, job_3_end, job_3_start, education_1, education_1_institution, education_1_end, education_2, education_2_institution, education_2_end, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2)
VALUES ('Aubrey Plaza', 'aubreyplaza@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012', 'Profesor', 'USA Schools', '01/1980', '01/1979', 'Investigador', 'CIA', '02/2004', '02/2001', 'FP Recolector', 'Texas College', '03/2003', 'Máster de Marketing', 'School of Austin', '01/1998', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, job_1, job_1_company, job_1_end, job_1_start, job_2, job_2_company, job_2_end, job_2_start, job_3, job_3_company, job_3_end, job_3_start, education_1, education_1_institution, education_1_end, education_2, education_2_institution, education_2_end, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2)
VALUES ('Jacinto Antón', 'jacinto@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012', 'Profesor', 'USA Schools', '01/1980', '01/1979', 'Investigador', 'CIA', '02/2004', '02/2001', 'FP Recolector', 'Texas College', '03/2003', 'Máster de Marketing', 'School of Austin', '01/1998', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, job_1, job_1_company, job_1_end, job_1_start, job_2, job_2_company, job_2_end, job_2_start, job_3, job_3_company, job_3_end, job_3_start, education_1, education_1_institution, education_1_end, education_2, education_2_institution, education_2_end, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2)
VALUES ('John Cassavetes', 'cassavetes@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012', 'Profesor', 'USA Schools', '01/1980', '01/1979', 'Investigador', 'CIA', '02/2004', '02/2001', 'FP Recolector', 'Texas College', '03/2003', 'Máster de Marketing', 'School of Austin', '01/1998', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, job_1, job_1_company, job_1_end, job_1_start, job_2, job_2_company, job_2_end, job_2_start, job_3, job_3_company, job_3_end, job_3_start, education_1, education_1_institution, education_1_end, education_2, education_2_institution, education_2_end, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2)
VALUES ('Monica Vitti', 'vitti@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012', 'Profesor', 'USA Schools', '01/1980', '01/1979', 'Investigador', 'CIA', '02/2004', '02/2001', 'FP Recolector', 'Texas College', '03/2003', 'Máster de Marketing', 'School of Austin', '01/1998', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, job_1, job_1_company, job_1_end, job_1_start, job_2, job_2_company, job_2_end, job_2_start, job_3, job_3_company, job_3_end, job_3_start, education_1, education_1_institution, education_1_end, education_2, education_2_institution, education_2_end, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2)
VALUES ('Michael Jordan', 'jordan@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012', 'Profesor', 'USA Schools', '01/1980', '01/1979', 'Investigador', 'CIA', '02/2004', '02/2001', 'FP Recolector', 'Texas College', '03/2003', 'Máster de Marketing', 'School of Austin', '01/1998', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, job_1, job_1_company, job_1_end, job_1_start, job_2, job_2_company, job_2_end, job_2_start, job_3, job_3_company, job_3_end, job_3_start, education_1, education_1_institution, education_1_end, education_2, education_2_institution, education_2_end, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2)
VALUES ('Vinícius Júnior', 'vinijr@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012', 'Profesor', 'USA Schools', '01/1980', '01/1979', 'Investigador', 'CIA', '02/2004', '02/2001', 'FP Recolector', 'Texas College', '03/2003', 'Máster de Marketing', 'School of Austin', '01/1998', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, job_1, job_1_company, job_1_end, job_1_start, job_2, job_2_company, job_2_end, job_2_start, job_3, job_3_company, job_3_end, job_3_start, education_1, education_1_institution, education_1_end, education_2, education_2_institution, education_2_end, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2)
VALUES ('Mahatma Gandhi', 'gandhi@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012', 'Profesor', 'USA Schools', '01/1980', '01/1979', 'Investigador', 'CIA', '02/2004', '02/2001', 'FP Recolector', 'Texas College', '03/2003', 'Máster de Marketing', 'School of Austin', '01/1998', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, job_1, job_1_company, job_1_end, job_1_start, job_2, job_2_company, job_2_end, job_2_start, job_3, job_3_company, job_3_end, job_3_start, education_1, education_1_institution, education_1_end, education_2, education_2_institution, education_2_end, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2)
VALUES ('Diego Velázquez', 'menino@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012', 'Profesor', 'USA Schools', '01/1980', '01/1979', 'Investigador', 'CIA', '02/2004', '02/2001', 'FP Recolector', 'Texas College', '03/2003', 'Máster de Marketing', 'School of Austin', '01/1998', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, job_1, job_1_company, job_1_end, job_1_start, job_2, job_2_company, job_2_end, job_2_start, job_3, job_3_company, job_3_end, job_3_start, education_1, education_1_institution, education_1_end, education_2, education_2_institution, education_2_end, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2)
VALUES ('Sonia Bueno', 'bueno.g.sonia@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012', 'Profesor', 'USA Schools', '01/1980', '01/1979', 'Investigador', 'CIA', '02/2004', '02/2001', 'FP Recolector', 'Texas College', '03/2003', 'Máster de Marketing', 'School of Austin', '01/1998', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball');

INSERT INTO users (name, email, password, birthdate, linkedin, time_availability, city, country, job_1, job_1_company, job_1_end, job_1_start, job_2, job_2_company, job_2_end, job_2_start, job_3, job_3_company, job_3_end, job_3_start, education_1, education_1_institution, education_1_end, education_2, education_2_institution, education_2_end, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2)
VALUES ('Alejandro Pedrero', 'apedrerovega@gmail.com', '$2b$10$yWbdCu.pLjmXMcbD8OS8MuwQlvY9K58J4883OFPZhASX9K0yOtV9S', STR_TO_DATE('01-10-1960', '%d-%m-%Y'), 'https://ar.linkedin.com/in/rodrigoayalaok', 'Noche', 'Arkansas', 'USA', 'Arqueólogo', 'Investigaciones Indy', '06/2013', '06/2012', 'Profesor', 'USA Schools', '01/1980', '01/1979', 'Investigador', 'CIA', '02/2004', '02/2001', 'FP Recolector', 'Texas College', '03/2003', 'Máster de Marketing', 'School of Austin', '01/1998', 'SEO', 'Conductor de camiones', 'Inglés', 'Alemán', 'Soccer', 'Basketball');

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



