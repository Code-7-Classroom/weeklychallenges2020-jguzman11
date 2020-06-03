-- easy 
DROP DATABASE IF EXISTS bookList;
CREATE DATABASE bookList;

USE bookList;
CREATE TABLE books (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255), 
    publish_date year, 
    author_firstname VARCHAR(255),
    author_lastname VARCHAR(255)
);
INSERT INTO books (title, publish_date, author_firstname, author_lastname)
VALUES ('The Great Gatsby', 1954, 'F.Scott', 'Fitzgerald'), ('The Little Prince', 1943, 'Antoine', 'de Saint-Exupery'), ('The Alchemist', 1988, 'Paulo', 'Coelho'), ('The Hobbit', 1937, 'J.R.R', 'Tolkien'), ('Harry Potter and the Philosopher\'s Stone', 1997, 'J.K', 'Rowling');
DROP TABLE books;