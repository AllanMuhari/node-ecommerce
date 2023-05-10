CREATE TABLE userTable (
    userid INT,
	username VARCHAR (255) NOT NULL,
	password VARCHAR(255)NOT NULL,
	email VARCHAR (255) UNIQUE,
	first_name VARCHAR(255),
	last_name VARCHAR (255),
	city VARCHAR (255),
	phone VARCHAR (255),
	isdelete INT DEFAULT 0
);
DROP TABLE userTable
SELECT * FROM userTable 