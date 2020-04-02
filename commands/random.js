const fetch = require("node-fetch");
const { RichEmbed } = require("discord.js");

module.exports = async (client, message, args) => {
    message.delete({ timeout: 1500 });
    if (args[0] === "lorem") {
        const lorem = await fetch("https://picsum.photos/v2/list?limit=100")
            .then(res => res.json())
            // .then(json => json.download_url)
            .then(function (json) {
                const index = Math.floor(Math.random() * 100);
                let url = new URL(json[index].download_url);
                url = url.protocol + "//i." + url.host + url.pathname + ".jpg";
                return url;
            });
        const embed = new RichEmbed()
            .setTitle("Image random")
            .setImage(lorem)
            .setFooter("Powered by 'https://picsum.photos/v2/list/'")
        message.channel.send(embed);
    }
}