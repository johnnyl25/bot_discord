const fetch = require("node-fetch");
const { RichEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
    message.delete({ timeout: 1500 });
    if (args[0] === "lorem") {
        const lorem = await fetch("https://source.unsplash.com/1600x900/?nature,beach,animals,wallpapers")
            .then((response) => {
            // .then(json => json.download_url);
            // .then(function (json) {
                const index = Math.floor(Math.random() * 100);
                let url = new URL(response.url);
                console.log(url);
                return url;
            });
        const embed = new RichEmbed()
            .setTitle("Image random")
            .setImage(lorem)
            .setFooter("Powered by 'https://source.unsplash.com/'")
        message.channel.send(embed);
    }  else if (args[0] === "nature") {
        const index = Math.floor(Math.random() * 10);
        const cat = await fetch("https://pixabay.com/api/?key=14869047-009b99445e3fcbb7651ac196a&category=nature")
        .then(res => res.json())
        .then(json => json.hits[index]['webformatURL']);
        const embed = new RichEmbed()
            .setTitle("Image random de la nature")
            .setImage(cat)
            .setFooter("Powered by 'https://pixabay.com/'")
        message.channel.send(embed);}
}
exports.help = {
    name: "random"
}