-- hard
CREATE DATABASE movieList2;
USE movieList2;

CREATE TABLE movies (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255), 
    release_date year, 
    rating DECIMAL(2,1)
);
INSERT INTO movies (title, release_date, rating)
VALUES ('Underwater', 2020, 5.8), ('The Lodge', 2020, 5.8), ('Joker', 2019, 8.5), ('The Lovebirds', 2020, 4.8), ('Extraction', 2020, 6.8), ('Once Upon a Time... in Hollywood', 2019, 7.7), ('Parasite', 2019, 8.6), ('365 Days', 2020, 3.6), ('The Gentlemen', 2019, 7.9), ('Snowpiercer', 2019, 7.9);
ALTER TABLE movies ADD COLUMN director_first VARCHAR(255);
ALTER TABLE movies ADD COLUMN director_last VARCHAR(255);
UPDATE movies 
	SET director_first = 'Brian', director_last = 'Duffield'
	WHERE title = 'Underwater';
UPDATE movies 
	SET director_first = 'Severin', director_last = 'Fiala'
	WHERE title = 'The Lodge';
UPDATE movies 
	SET director_first = 'Todd', director_last = 'Philips'
	WHERE title = 'Joker';
UPDATE movies 
	SET director_first = 'Michael', director_last = 'Showalter'
	WHERE title = 'The Lovebirds';
UPDATE movies 
	SET director_first = 'Sam', director_last = 'Hargrave'
	WHERE title = 'Extraction';
UPDATE movies 
	SET director_first = 'Quentin', director_last = 'Tarantino'
	WHERE title = 'Once Upon a Time... in Hollywood';
UPDATE movies 
	SET director_first = 'Boog', director_last = 'Ho'
	WHERE title = 'Parasite';
UPDATE movies 
	SET director_first = 'Barbara', director_last = 'Bialowas'
	WHERE title = '365 Days';
UPDATE movies 
	SET director_first = 'Guy', director_last = 'Ritchie'
	WHERE title = 'The Gentlemen';
UPDATE movies 
	SET director_first = 'Bong', director_last = 'Ho'
	WHERE title = 'Snowpiercer';

ALTER TABLE movies ADD COLUMN fullname VARCHAR(50);
UPDATE movies SET fullname = CONCAT(director_first, ' ', director_last);
SELECT * FROM movies ORDER BY fullname;
DELETE FROM movies WHERE REGEXP_LIKE(director_last, '[r-z]$');
SELECT * FROM movies ORDER BY fullname LIMIT 3;
SELECT * FROM movies;
DROP TABLE movies;