//require to use express
const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json')
const port = 3000; // assign port to 3000

app.use(express.static(path.join(__dirname, 'public'))) //static files  that will be used consistently


//set view engine to ejs as that is the template we are using
app.set('view engine', 'ejs');
//make index.js then views
//using module path.join we join the path to views. 'views' can be named any directory
app.set('views', path.join(__dirname, '/views'));


//when homepage is requested make homepage home.ejs file
app.get('/',(req, res) => {
    res.render("home");
})

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Chanel', 'Pups'
    ]
    res.render('cats', { cats });
})

// : allows assignment of any name and pass parameter as a variable
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params; //destructure parameter into variable
    const data = redditData[subreddit]; // use redditData array since object keys are found with array
    if(data) {
    res.render('subreddit', { ...data}); //... spread operator allows to access indivual properties instead of 
                                         //having to access each key manually
    // render the subreddit page and pass the value into the file
    } else {
        res.render('notfound', {subreddit})
    }
})


//when homepage is requested make homepage rand.ejs file
app.get("/rand", (req, res) => {
    // create variable outisde file
    const num = Math.floor(Math.random() * 10) + 1;
    //access varibale inside file by creating object and assinging it a key to access the value
    res.render('random.ejs', { num}) //can pass same name or different
})

//call app.listen to make it check on port that we assigned
app.listen(port, () => {
    console.log("LISTENING ON PORT 3000")
} )