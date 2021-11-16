console.log("Bot Login Start")
const { Client, Collection, Intents } = require('discord.js');
const fs = require('fs');
const { glob } = require("glob");
const { dirname } = require('path');
const { promisify } = require("util");
const crypto = require('./utils/crypto');
const config = require('./config')
const { connect } = require('./bot/src/connect')

const globPromise = promisify(glob);

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
console.log("token", crypto.decrypt(config.token))

// client.on('ready', () => {
//   console.log(`Client Test ${client.user.tag} is logged in!`);
// });

// client.on('messageCreate', (message) => {
//   if (message.content.toLowerCase().includes('fudge') || message.content.toLowerCase().includes('pudding')) {
//     // message.channel.send('Such language is prohibited!');
//     message.reply("Hello, I am hunter!")
//   }
// });

module.exports = client;
client.commands = new Collection();


// configs

connect()
const commandFiles = fs.readdirSync(`${__dirname}/bot/src/commands`).filter(file => file.endsWith('.js '));
// -----------------
for (const file of commandFiles) {
    const command = require(`${__dirname}/bot/src/commands / $ { file } `);
    client.commands.set(command.name, command);
    console.log(` [READY COMMAND] $ { file } `)
}
// event handler
const eventFiles = fs.readdirSync(`${__dirname}/bot/src/events`).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const event = require(`${__dirname}/bot/src/events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

require("./server")
client.login(crypto.decrypt(config.token))