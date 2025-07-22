const express = require('express');
const path = require('path');

const app = express();

// Middleware setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.post('/', (req, res) => {
    console.log('user input :' + req.body.message);
    res.redirect('/');
});

app.listen(8000, () => console.log('Server running on http://localhost:8000'));
