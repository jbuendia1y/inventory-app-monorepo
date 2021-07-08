CREATE TABLE purchases(
idPurchase INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
seller VARCHAR(100),
idProduct INT,
amount INT,
cost INT,
date TIMESTAMP,
FOREIGN KEY (idProduct) REFERENCES products(idProduct)
);

CREATE TABLE sales(
idSale INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
client VARCHAR(100),
idProduct INT,
amount INT,
price INT,
date TIMESTAMP,
FOREIGN KEY (idProduct) REFERENCES products(idProduct)
);