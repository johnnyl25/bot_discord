const fetch = require("node-fetch");
const { RichEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
    message.delete({ timeout: 1500 });

    if (args[0] === "cat") {
        const cat = await fetch("https://pixabay.com/api/?key=14869047-009b99445e3fcbb7651ac196a&q=chat")
            .then((response) => {
                // let url = new URL(response.hits.imageURL);
                console.log(response);
                // return url;

            });
            // .then(json => json);
        const embed = new RichEmbed()
            .setTitle("Image random de chat")
            .setImage(cat)
            .setFooter("Powered by 'https://pixabay.com/'")
        message.channel.send(embed);
    } else if (args[0] === "dog") {
        const dog = await fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(json => json.message);
        const embed = new RichEmbed()
            .setTitle("Image random de chien")
            .setImage(dog)
            .setFooter("Powered by 'https://dog.ceo/api/breeds/image/random'")
        message.channel.send(embed);
    } else if (args[0] === "fox") {
        const fox = await fetch("https://randomfox.ca/floof/")
            .then(res => res.json())
            .then(json => json.image);
        const embed = new RichEmbed()
            .setTitle("Image random de renard")
            .setImage(fox)
            .setFooter("Powered by 'https://randomfox.ca/floof/'")
        message.channel.send(embed);
    }
}
exports.help = {
    name: "animals"
}