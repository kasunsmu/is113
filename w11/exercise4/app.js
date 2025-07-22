const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');

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

const secret = process.env.SECRET;

app.use(session({
    secret: secret, // sign the session ID cookie. should be a long, random, and secure string, preferably stored in an environment variable
    resave: false, // Prevents the session from being saved back to the session store if nothing has changed.
    saveUninitialized: false // Prevents a new, empty session from being saved to the store.
}));

// Routes
app.get('/', (req, res) => {
    res.send('NOT IMPLEMENTED');
});

app.get('/stats', (req, res) => {
    req.session.visit_count = req.session.visit_count + 1 || 1;
    res.send('Number of visits: ' + req.session.visit_count);
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    try {
        const user = new User({
            username: req.body.username,
            password: req.body.password
        });
        await user.save();
        res.redirect('/login');
    } catch (err) {
        console.error(err);
        res.redirect('/register');
    }
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.redirect('/login');
        }

        const match = req.body.password == user.password;
        if (!match) {
            return res.redirect('/login');
        }

        req.session.user = {
            id: user._id,
            username: user.username
        };

        res.redirect('/profile');
    } catch (err) {
        console.error(err);
        res.redirect('/login');
    }
});

app.get('/profile', (req, res) => {
    res.send('NOT IMPLEMENTED');
});

app.get('/logout', (req, res) => {
    res.send('NOT IMPLEMENTED');
});

app.listen(8000, () => console.log('Server running on http://localhost:8000'));
