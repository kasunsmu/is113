const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Message = require('./models/Message');

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
// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.post('/', async (req, res) => {
    console.log('user input :' + req.body.message);
    try {
        const message = new Message({
            message: req.body.message,
        });
        await message.save();
        console.log('message saved to mongodb');
    } catch (err) {
        console.error(err);
    } finally {
        res.redirect('/');
    }
});

app.listen(8000, () => console.log('Server running on http://localhost:8000'));
