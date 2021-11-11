const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "playvideo",
  run: async (client, message, args) => {
      const mention = args[0];
      const guild = message.channel.guild;
      const userId = mention.replace(/<@!?(.*?)>/, (match, group1) => group1);
      const member = guild.members.get(userId);

      const userIsInGuild = !!member;
      if (!userIsInGuild) {
        return message.channel.createMessage('User not found in this guild.');
      }
  },
};