const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    if (!req.session.visit_count) {
        console.log("This is the first visit to this page");
        req.session.visit_count = 0;
    }
    req.session.visit_count += 1;
    res.send('Number of visits: ' + req.session.visit_count + '<br><br><a href="/reset">Reset</a>');
});

app.get('/reset', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

app.listen(8000, () => console.log('Server running on http://localhost:8000'));
