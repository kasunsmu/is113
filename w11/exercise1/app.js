const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const User = require('./models/User');

const app = express();

const mongoDB = process.env.MONGODB;

// Connect to MongoDB
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
    res.send('NOT IMPLEMENTED');
});

app.get('/stats', (req, res) => {
    res.send('NOT IMPLEMENTED');
});

app.get('/register', (req, res) => {
    res.send('NOT IMPLEMENTED');
});

app.post('/register', async (req, res) => {
    res.send('NOT IMPLEMENTED');
});

app.get('/login', (req, res) => {
    res.send('NOT IMPLEMENTED');
});

app.post('/login', async (req, res) => {
    res.send('NOT IMPLEMENTED');
});

app.get('/profile', (req, res) => {
    res.send('NOT IMPLEMENTED');
});

app.get('/logout', (req, res) => {
    res.send('NOT IMPLEMENTED');
});

app.listen(8000, () => console.log('Server running on http://localhost:8000'));
