const fetch = require("node-fetch");
const { RichEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
    message.delete({ timeout: 1500 });
    if (args[0] === "lorem") {
        const lorem = await fetch("https://source.unsplash.com/1600x900/?")
            .then(res => res.json())
            // .then(json => json.download_url);
            .then(function (json) {
                const index = Math.floor(Math.random() * 100);
                let url = new URL(json[index].download_url);
                console.log(url);
                url = url.protocol + "//i." + url.host + url.pathname + ".jpg";
                return url;
            });
        const embed = new RichEmbed()
            .setTitle("Image random")
            .setImage(lorem)
            .setFooter("Powered by 'https://source.unsplash.com/'")
        message.channel.send(embed);
    }
}
exports.help = {
    name: "random"
}