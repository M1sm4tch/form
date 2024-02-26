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

let validatedData = [];

app.get('/',(req, res)=>{
    res.render('index');
});

app.post('/submit', (req, res) => {
    
    const { userName, userEmail, userAge, userPassword, gender } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
        res.render('form', { error: 'Invalid email address' });
        return;
    }

    const userData = {
        userName,
        userEmail,
        userAge,
        userPassword,
        gender
    };
    validatedData.push(userData);

    res.render('success', { userData });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
