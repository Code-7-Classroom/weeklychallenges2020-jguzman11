-- very hard
CREATE DATABASE carList2;
USE carList2;

CREATE TABLE cars (
	id INT AUTO_INCREMENT PRIMARY KEY,
    make VARCHAR(20), 
    model VARCHAR(20), 
    year YEAR
);
INSERT INTO cars (make, model, year)
VALUES ('Infiniti', 'G37', 2012), ('Nissan', '350z', 2008), ('Honda', 'Civic', 2016);
ALTER TABLE cars ADD COLUMN prices INT;
ALTER TABLE cars ADD COLUMN colors VARCHAR(255);
UPDATE cars SET prices=15850,  colors='Black, Light Gray, Red' WHERE make = 'Infiniti';
UPDATE cars SET prices=10695,  colors='Crystal Black, White Pearl, Dark Metallic' WHERE make = 'Nissan';
UPDATE cars SET prices=9675,  colors='Black, Blue, Burgundy' WHERE make = 'Honda';
ALTER TABLE cars ADD COLUMN makemodel VARCHAR(50);
UPDATE cars SET makemodel = CONCAT(make, ' ', model);
SELECT make, COUNT(1) FROM cars GROUP BY make; 
SELECT * FROM cars;
DROP TABLE cars;



