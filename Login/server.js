// first go to cd Login/
// second type npm run devStart
// now you can access website
// access by going to http://localhost:3000/home in your browser
// http://localhost:3000/login works too

const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const path = require('path');

const users = []

app.set('view-engine', 'ejs')

app.use(express.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, '..')));

app.get('/home', (req, res) => { // directory to the home page
    res.sendFile(path.join(__dirname, '..', 'index.html'))
})

app.get('/', (req, res) => { // just a random home page
    res.render('index.ejs', {name: 'Kyle'})
})

app.get('/login', (req, res) => { // directory to the login page
    res.render('login.ejs')
})

app.post('/login', async (req, res) => { // client login fires this event
    try {
        const hashedPassword = await bcrypt.hash(req.body.psw, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.uname,
            password: hashedPassword
        })
    } catch {
        
    }
    console.log(users)
    res.redirect('/home') // for now i just have it redirect straight to the pinup app
})

app.listen(3000)