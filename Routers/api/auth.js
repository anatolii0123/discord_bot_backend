const app = require('express').Router()
const passport = require('passport')
const cfg = require('../../config')
app.get('/discord', passport.authenticate('discord'));


app.get('/discord/redirect', passport.authenticate('discord', {
    failureRedirect: `${cfg.FRONDEND_URL}/`
}), (req, res) => {
    res.redirect(`${cfg.FRONDEND_URL}/account?user=${JSON.stringify(res.user)}`)
})

app.get('/', (req, res) => {

    if (req.query.user) {
        console.log("authorized")
        res.json({ msg: "authorized", user: JSON.parse(req.query.user) })
    } else {
        console.log("unauthorized")
        res.json({ msg: "unauthorized" })
    }
})

module.exports = app;