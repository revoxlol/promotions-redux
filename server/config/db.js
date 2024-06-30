const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Make sure to put the mySQL username hhere
    password: 'your_password', // Make sure to put the mySQL password here
    database: 'promotions_db' /* Make sure to put the database name here/if you dont have one, create one using:
                             //mySQL command line : 
                             //1 ) mysql -u root -p
                             // 2) CREATE DATABASE promotions_db;
                             // 3) USE promotions_db;

                             CREATE TABLE promotions (
                             id INT AUTO_INCREMENT PRIMARY KEY,
                            name VARCHAR(255) NOT NULL,
                            mailing_date DATE NOT NULL,
                            number_of_gifts_sent INT NOT NULL,
                            description TEXT,
                            card_numbers TEXT
                            );

                            CREATE TABLE gifts (
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            name VARCHAR(255) NOT NULL,
                            remaining INT NOT NULL,
                            expiration_date DATE NOT NULL,
                            denomination DECIMAL(10, 2) NOT NULL
                            );
                            4 ) Hate mySQL
                             */     
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

module.exports = db;
