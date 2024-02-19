const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 2000;

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req, res)=>{
    res.render('index');
});



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
