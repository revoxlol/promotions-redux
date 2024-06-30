const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  
const promotionsRouter = require('./routes/promotionRoutes');
const giftsRouter = require('./routes/giftsRouter'); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Enable CORS for frontend origin
app.use(cors({
  origin: 'http://localhost:3000' // 
}));


app.use('/api/promotions', promotionsRouter);
app.use('/api/gifts', giftsRouter); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});