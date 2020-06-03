-- very easy 
DROP DATABASE IF EXISTS carList;
CREATE DATABASE carList;

USE carList;
CREATE TABLE cars (
id INT AUTO_INCREMENT PRIMARY KEY,
carMake VARCHAR(255),
carModel VARCHAR(255),
carYear INT
);

INSERT INTO cars(carMake, carModel, carYear, id) VALUES ('Nissan','350z',2008 ,1),('Infiniti','G37', 2010, 2),('Honda','Accord', 2001 ,3);

SELECT*FROM cars;