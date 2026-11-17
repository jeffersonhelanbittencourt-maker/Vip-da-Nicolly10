const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.post('/api/webhooks/mercadopago', (req, res) => {
  res.status(200).json({ received: true });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
