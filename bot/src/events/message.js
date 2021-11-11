const client = require("../index");
const guildSchema = require('../models/guild')
client.on("messageCreate", async (message) => {
    const row = await guildSchema.findOne({ guildID: message.guild.id });
    let prefix = row.prefix;

    if (!message.content.startsWith(prefix)) return;
  
    if (message.author.bot) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
  
    const cmd = args.shift().toLowerCase();
  
    let command = client.commands.get(cmd);
  
    if (command) return command.run(client, message, args);
  });