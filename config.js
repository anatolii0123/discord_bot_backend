module.exports = {
    token:  {
        iv: '917a1d810312664053cbd77f7693f843',
        content: 'b0bae7d08e7712290c02212c7d4af17a2251eae986e2c09da3c181c3dad017969933df248738bdeb31983f6fe28603d69fde0d2b75f0a8c8c28b1b'
    }, // crypto token from bot
    prefix: "v-", // default prefix
    database: "mongodb+srv://guardian:ASDFasdf1234@cluster0.i86ba.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", // link from mongodb
    clientId: "905608828970729482", //client id from bot
    clientSecret: "vRPq1Z-utnB0tVSfuw3cnSGvysFCylcj", // client secret from bot
    callbackurl: "/api/auth/discord/redirect", // callback
    port: 8000, // port
    FRONDEND_URL: "https://discord-bot-frontend.herokuapp.com" // Front-End URL
}