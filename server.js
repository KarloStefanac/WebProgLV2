const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect("/images");
});
app.get('/grafikon', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'grafikon.html')); 
});
app.get('/slike', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'slike.html')); 
});
app.get('/videoteka', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'videoteka.html')); 
});
app.listen(PORT, () => {
    console.log("Server pokrenut na http://localhost:3000");
});
