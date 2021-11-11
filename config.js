module.exports = {
    token: {
        iv: 'a24b05a16056bbc2a73d3a21048ac501',
        content: '1cbab4195840a808928de7600389a545deb6c42560c9a0444a4c03971048ba5308b4387d3733a717779421be24835edd4c05c0bead2c2102b713ec'
    }, // crypto token from bot
    prefix: "v-", // default prefix
    database: "mongodb+srv://guardian:ASDFasdf1234@cluster0.i86ba.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", // link from mongodb
    clientId: "906758918754148363", //client id from bot
    clientSecret: "8V7ZVnC3ImpLWiE6B7O-ZvsowWytuKdn", // client secret from bot
    callbackurl: "/api/auth/discord/redirect", // callback
    port: 8000, // port
    FRONDEND_URL: "http://guardian-discord-bot-frontend.herokuapp.com" // Front-End URL
}