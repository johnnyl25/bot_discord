const { RichEmbed } = require("discord.js");

exports.run = (client, message) => {
    const embed = new RichEmbed()
        .setDescription(message.guild.name)
        .setThumbnail(message.guild.iconURL)
        .addField("Membres", message.guild.memberCount, true)
        .addField("Owner", message.guild.owner.user.tag, true)
        .setFooter(message.guild.owner.user.tag, message.guild.owner.user.avatarURL)
        .setTimestamp();
    message.channel.send(embed);
}
exports.help = {
    name: "sinfo"
}