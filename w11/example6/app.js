const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();

// Middleware setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.post('/', async (req, res) => {
    const originalMessage = req.body.message;
    console.log('user input :' + originalMessage);
    const hashedMessage = await bcrypt.hash(originalMessage, 10);
    console.log('hashed message :' + hashedMessage);
    const match = await bcrypt.compare(originalMessage, hashedMessage);
    console.log('Is match :' + match);

    res.redirect('/');
});

app.listen(8000, () => console.log('Server running on http://localhost:8000'));
