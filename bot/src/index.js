console.log("Bot Login Start")
const { Client, Collection, Intents } = require('discord.js');
// const fs = require('fs');
// const { glob } = require("glob");
// const { dirname } = require('path');
// const { promisify } = require("util");
// const crypto = require('../../utils/crypto');
// const config = require('../../config')
// const { connect } = require('./connect')
// const globPromise = promisify(glob);

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
console.log("token", crypto.decrypt(config.token))
// module.exports = client;
// client.commands = new Collection();


// configs

// connect()
// const commandFiles = fs.readdirSync(`${__dirname}/commands`).filter(file => file.endsWith('.js '));
// // -----------------
// for (const file of commandFiles) {
//     const command = require(`${__dirname}/commands / $ { file }
//     `);
//     client.commands.set(command.name, command);
//     console.log(` [READY COMMAND] $ { file }
//     `)
// }
// // event handler
// const eventFiles = fs.readdirSync(`${__dirname}/events`).filter(file => file.endsWith('.js'));

// for (const file of eventFiles) {
//     const event = require(`${__dirname}/events/${file}`);
//     if (event.once) {
//         client.once(event.name, (...args) => event.execute(...args));
//     } else {
//         client.on(event.name, (...args) => event.execute(...args));
//     }
// }


client.login(crypto.decrypt(config.token))