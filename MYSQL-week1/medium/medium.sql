-- medium 
CREATE DATABASE movieList;
DROP TABLE IF EXISTS movies;

USE movieList;

CREATE TABLE movies (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255), 
    release_date year, 
    rating DECIMAL(2,1)
);
INSERT INTO movies (title, release_date, rating)
VALUES ('Superman', 2020, 5.7), ('Sonic', 2018, 5), ('Joker', 2019, 8.5), ('Capon', 2020, 4.8), ('Extraction', 2020, 6.8), ('Once Upon a Time... in Hollywood', 2019, 7.7), ('Parasite', 2019, 8.6), ('365 Days', 2020, 3.6), ('The Gentlemen', 2019, 7.9), ('Batman', 2020, 4);
SELECT * FROM movies 
WHERE title LIKE '%s%' ORDER BY release_date ASC;
DROP TABLE movies;