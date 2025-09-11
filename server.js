const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// set view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// serve static files (css, images)
app.use(express.static(path.join(__dirname, 'docs')));

// route
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/experience', (req, res) => {
  res.render('experience');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
