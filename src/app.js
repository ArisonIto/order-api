const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const orderRoutes = require('./routes/orderRoutes');

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use('/order', orderRoutes);

module.exports = app;