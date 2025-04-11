const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.redirect('/images');
});

app.get('/slike', (req, res) => {
    const dataPath = path.join(__dirname, 'images.json');
    console.log('Reading data from:', dataPath);
    const images = JSON.parse(fs.readFileSync(dataPath));
    res.render('slike', { images });
});

app.get('/grafikon', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'grafikon.html')); 
})
app.listen(PORT, () => {
    console.log("Server pokrenut na http://localhost:3000");
});
