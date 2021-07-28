const path = require('path');
const express = require('express');
const { v4: uuid } = require('uuid');
const app = express();

//parse data in POST request body
app.use(express.urlencoded( {extended: true}));
// parse incoming JSON in POST request body
app.use(express.json());

app.use( express.static( "Items" ) );


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Our fake database:
let posts= [
    {
        tag: uuid(),
        username : 'Todd',
        picture: "1",
        description: 'lol that is so funny!'
    },
    {
        tag: uuid(),
        username: 'Skyler',
       // picture: ,
        description : 'I like to go birdwatching with my dog'
    },
    {
        tag: uuid(),
        username: 'Sk8erBoi',
       // picture: ,
        description : 'Plz delete your account, Todd'
    },
    {
        tag: uuid(),
        username: 'onlysayswoof',
        //picture: ,
        description : 'woof woof woof'
    }
]





app.get('/homepage', (req,res) => {
    res.render('Pics/homepage', {posts})
})

app.listen(3001, () => {
    console.log("LIVE ON PORT 3001");
})