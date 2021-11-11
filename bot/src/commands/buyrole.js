const { MessageEmbed } = require("discord.js");

function logDonation(member, message, timestamp) {
  const isKnownMember = !!member;
  const memberName = isKnownMember ? `${member.username}#${member.discriminator}` : 'Unknown';
  const embedColor = isKnownMember ? 0x00ff00 : 0xff0000;

  const logMessage = {
    embed: {
      title: 'Donation received',
      color: embedColor,
      timestamp: timestamp,
      fields: [
        { name: 'Donor Discord name', value: memberName, inline: true },
        { name: 'Message', value: message, inline: true },
      ],
    },
  };

  return bot.createMessage(LOG_CHANNEL_ID, logMessage);
}

module.exports = {
  name: "buyrole",
  run: async (client, message, args) => {
      const mention = args[0];
      const guild = message.channel.guild;
      const userId = mention.replace(/<@!?(.*?)>/, (match, group1) => group1);
      const member = guild.members.get(userId);

      const userIsInGuild = !!member;
      if (!userIsInGuild) {
        return message.channel.createMessage('User not found in this guild.');
      }

      logDonation(member, "This is buy role embed link", Date.now());
  },
};