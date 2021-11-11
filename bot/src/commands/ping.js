const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  run: async (client, message, args) => {
    message.channel.send('work')
  },
};