const app = require('express').Router()
const passport = require('passport')
const cfg = require('../../config')
app.get('/discord', passport.authenticate('discord'));


app.get('/discord/redirect', passport.authenticate('discord', {
    failureRedirect: `${cfg.FRONDEND_URL}/`
}), (req, res) => {
    // const client = require('../../bot/src')
    // console.log("session", req)
    // console.log("res", res)
    // res.cookie('user', '2323234')

    // let session = req.session;
    // session.user = res.user;

    res.cookie('user', '2222', { httpOnly: true, domain: "http://discord-bot-backend-app.herokuapp.com"})
    res.redirect(`${cfg.FRONDEND_URL}/account`)
})

app.get('/', (req, res) => {

    console.log("Hunter : ", req)

    if (req.session.user) {
        console.log("authorized")
        res.json({ msg: "authorized", user: req.user })
    } else {
        console.log("unauthorized")
        res.json({ msg: "unauthorized" })
    }
})

module.exports = app;