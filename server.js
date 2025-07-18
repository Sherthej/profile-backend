const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();
connectDB();

const app = express();
const cors = require('cors');

app.use(cors({
  origin: 'https://profile-frontend-omega.vercel.app',
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true,
}));

app.use(express.json());

app.use('/api/contacts', contactRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
