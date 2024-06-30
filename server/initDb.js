const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password', // Adjust your password
    database: 'promotions_db' // Adjust your database name
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');

    const createPromotionsTable = `
        CREATE TABLE IF NOT EXISTS promotions (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            description TEXT,
            cardNumbers TEXT,
            numberOfGifts INT,
            daysToReceiveGift INT,
            date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;
    const createGiftsTable = `
        CREATE TABLE IF NOT EXISTS gifts (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            remaining INT,
            expirationDate DATE,
            denomination DECIMAL(10, 2)
        )
    `;

    db.query(createPromotionsTable, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Promotions table created or already exists.');
    });

    db.query(createGiftsTable, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Gifts table created or already exists.');

        // Insert sample data into gifts table
        const sampleGifts = [
            { name: 'Gift 1', remaining: 10, expirationDate: '2024-12-31', denomination: 100.00 },
            { name: 'Gift 2', remaining: 5, expirationDate: '2024-11-30', denomination: 50.00 },
            { name: 'Gift 3', remaining: 20, expirationDate: '2024-10-31', denomination: 20.00 },
            { name: 'Gift 4', remaining: 15, expirationDate: '2024-09-30', denomination: 10.00 },
            { name: 'Gift 5', remaining: 8, expirationDate: '2024-08-31', denomination: 5.00 }
        ];

        sampleGifts.forEach(gift => {
            db.query('INSERT INTO gifts SET ?', gift, (err, result) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log(`Inserted gift: ${gift.name}`);
            });
        });
    });
});
