CREATE TABLE usuarios(
    idUser INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    password TEXT,
    role VARCHAR(100),
    FOREIGN KEY (role) REFERENCES roles(name)
);