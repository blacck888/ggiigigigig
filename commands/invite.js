const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    let prefix = config.prefix;
    if (message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    let invite = new Discord.MessageEmbed()
    .setTitle("")
    .addField("Link do zaproszenia", "[Dodaj mnie!](https://discordapp.com/api/oauth2/authorize?client_id=811897475991470110&permissions=8&scope=bot)")
    .addField("Support Server", "[NIE MA](NONE)")
    .setTimestamp()
    .setFooter(`Requested by ${message.author.tag}`, client.user.displayAvatarURL())
    message.channel.send(invite);
}

module.exports.help = {
    name: "invite"
}
