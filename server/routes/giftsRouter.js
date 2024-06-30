// const db = require('../config/db');

// exports.getGifts = (req, res) => {
//     db.query('SELECT * FROM gifts', (err, results) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send(err);
//         } else {
//             res.json(results);
//         }
//     });
// };





const express = require('express');
const promotionController = require('../controllers/promotionController');

const router = express.Router();

router.get('/', promotionController.getGifts);

module.exports = router;
