const cfg = require("../../../config");
const client = require("../index");
const guildSchema = require("../models/guild");

client.on("guildCreate", async (guild) => {
  guildSchema.findOne({ guildId: guild.id }, async (err, data) => {
    if (err) console.error(err);
    if (!data) {
      const date = new guildSchema({
        guildID: guild.id,
      });
      date.save();
      console.log(guild.name + ' added the bot.')
    }
  });
});
