const client = require("../index");

client.on("ready", async (message) => {
    console.log(`Ready! Logged in as ${client.user.tag}`);
    client.user.setActivity(`Bot | Loaded`);
});