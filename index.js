require('./Routers/strategies/discord');
const express = require('express')
const app = express();
const cors = require('cors')
const passport = require('passport')
let mongoose = require('mongoose')
const cfg = require('./config')
var session = require('express-session')
mongoose.connect(cfg.database)
let aplicatie = require('./Routers/api')
const MongoDbStore = require('connect-mongo');
const crypto = require('./utils/crypto');


app.use(session({
    secret: 'secret',
    cookie: {
        maxAge: 60000 * 60 * 24
    },
    resave: false,
    saveUninitialized: false,
    store: MongoDbStore.create({
        mongoUrl: cfg.database
    })
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
    origin: ["https://discord-bot-frontend.herokuapp.com"],
    credentials: true
}))
// app.use(cors({
//     origin: "*",
// }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/test', (req, res) => res.json({ msg: "success" }))
app.use('/api', aplicatie)
const port = process.env.PORT || cfg.port;
app.listen(port, () => {
    console.log(`App is listening to ${port}`);
})