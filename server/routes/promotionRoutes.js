const express = require('express');
const router = express.Router();
const promotionController = require('../controllers/promotionController');


router.get('/', promotionController.getPromotions);
router.post('/', promotionController.createPromotion);
router.put('/:id', promotionController.updatePromotion);
router.delete('/:id', promotionController.deletePromotion);
router.get('/gifts', promotionController.getGifts); 

module.exports = router;






















// const express = require('express');
// const router = express.Router();
// const promotionController = require('../controllers/promotionController');

// // Define routes
// router.get('/promotions', promotionController.getPromotions);
// router.post('/promotions', promotionController.createPromotion);
// router.put('/promotions/:id', promotionController.updatePromotion);
// router.delete('/promotions/:id', promotionController.deletePromotion);
// router.get('/gifts', promotionController.getGifts);

// module.exports = router;





// const express = require('express');
// const router = express.Router();

// // Dummy data for promotions
// const promotions = [
//   { id: 1, title: 'Promotion 1', description: 'Description for promotion 1' },
//   { id: 2, title: 'Promotion 2', description: 'Description for promotion 2' },
//   // Add more promotions as needed
// ];

// // Route to get all promotions
// router.get('/promotions', (req, res) => {
//   res.json(promotions);
// });

// module.exports = router;
