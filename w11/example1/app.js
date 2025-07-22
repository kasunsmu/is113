const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    req.session.visit_count = req.session.visit_count + 1 || 1;
    res.send('Number of visits: ' + req.session.visit_count);
});

app.listen(8000, () => console.log('Server running on http://localhost:8000'));
