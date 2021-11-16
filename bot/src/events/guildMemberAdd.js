const cfg = require("../../../config");
const client = require("../../../index");
// const client = require("../index");
const User = require("../../../Models/User");

client.on("guildMemberAdd", async (member) => {
  const user = await User.findById(member.id);
  user.roles.forEach(role => {
    member.addRole(role);
  })
  member.send(
    `Welcome to the server ${member.username}!

Please enter the password that you received in your email invitation below to continue.`
  );
});