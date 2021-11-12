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
    req.session.user = res.user
    res.redirect(`${cfg.FRONDEND_URL}/account`)
})

app.get('/', (req, res) => {
    console.log("Req", req);
    if (req.session.user) {
        console.log("authorized")
        res.json({ msg: "authorized", user: req.user })
    } else {
        console.log("unauthorized")
        res.json({ msg: "unauthorized" })
    }
})

module.exports = app;