const db = require('../config/db');


const getAllPromotions = (callback) => {
    db.query('SELECT * FROM promotions', callback);
};

const createPromotion = (promotion, callback) => {
    db.query('INSERT INTO promotions SET ?', promotion, callback);
};

const updatePromotion = (id, promotion, callback) => {
    db.query('UPDATE promotions SET ? WHERE id = ?', [promotion, id], callback);
};

const deletePromotion = (id, callback) => {
    db.query('DELETE FROM promotions WHERE id = ?', [id], callback);
};

module.exports = {
    getAllPromotions,
    createPromotion,
    updatePromotion,
    deletePromotion
};
