const db = require('../config/db');

exports.getPromotions = (req, res) => {
    const { page = 1, limit = 10, sortBy = 'date', order = 'asc' } = req.query;
    const offset = (page - 1) * limit;
    const sortOrder = order === 'asc' ? 'ASC' : 'DESC';

    const query = `
        SELECT * FROM promotions
        ORDER BY ${sortBy} ${sortOrder}
        LIMIT ?, ?
    `;

    db.query(query, [parseInt(offset), parseInt(limit)], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send(err);
        } else {
            db.query('SELECT COUNT(*) as count FROM promotions', (err, countResults) => {
                if (err) {
                    console.error(err);
                    res.status(500).send(err);
                } else {
                    const totalPages = Math.ceil(countResults[0].count / limit);
                    res.json({
                        promotions: results,
                        totalPages: totalPages,
                        currentPage: parseInt(page),
                    });
                }
            });
        }
    });
};

exports.createPromotion = (req, res) => {
    const promotion = req.body;
    db.query('INSERT INTO promotions SET ?', promotion, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send(err);
        } else {
            res.json({ id: result.insertId, ...promotion });
        }
    });
};

exports.updatePromotion = (req, res) => {
    const { id } = req.params;
    const promotion = req.body;
    db.query('UPDATE promotions SET ? WHERE id = ?', [promotion, id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send(err);
        } else {
            res.json(promotion);
        }
    });
};

exports.deletePromotion = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM promotions WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send(err);
        } else {
            res.json({ success: true });
        }
    });
};

exports.getGifts = (req, res) => {
    console.log("Received request for gifts");
    db.query('SELECT * FROM gifts', (err, results) => {
        if (err) {
            console.error(err);
            return res.status(404).send("Error fetching gifts");
        }
        console.log("Fetched gifts:", results); // Add logging to see the results
        res.json(results);
    });
};
