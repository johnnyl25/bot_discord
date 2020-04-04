const { Client, Collection } = require("discord.js");
// const { TOKEN } = require("./config");
const client = new Client({ disableEveryone: true });
const fs = require("fs");

client.PREFIX = process.env.PREFIX;
require("./util/function")(client);
client.mongoose = require("./util/mongoose");
client.commands = new Collection();

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
        if (!file.endsWith(".js")) return undefined;
        const props = require('./commands/${file}');
        const cmdName = file.split(".")[0]; // exemple: animals.js  array => ["animals", "js"]
        console.log('Commande ${cmdName} chargée.');
        client.commands.set(cmdName, props);
    });
});

client.on("ready", () => require("./events/ready.js")(client));
client.on("message", msg => require("./events/message.js")(client, msg));
client.on("guildMemberAdd", member => require("./events/guildMemberAdd.js")(client, member));
client.on("guildCreate", guild => require("./events/guildCreate.js")(client, guild));

// client.mongoose.init();
client.login(process.env.BOT_TOKEN);
// client.on("error", console.error);
// client.on("warn", console.warn);
// client.on("debug", console.log);