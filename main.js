const { Client, Collection } = require("discord.js");
// const { TOKEN } = require("./config");
const client = new Client({ disableEveryone: true });

client.PREFIX = process.env.PREFIX;
require("./util/function")(client);
client.mongoose = require("./util/mongoose");

client.commands = new Collection();
client.commands.set("repeat", require("./commands/repeat.js"));
client.commands.set("ping", require("./commands/ping.js"));
client.commands.set("quiest", require("./commands/joke.js"));
client.commands.set("role", require("./commands/role.js"));
client.commands.set("sinfo", require("./commands/sinfo.js"));
client.commands.set("animals", require("./commands/animals.js"));
client.commands.set("random", require("./commands/random.js"));
client.commands.set("eval", require("./commands/eval.js"));

client.on("ready", () => require("./events/ready.js")(client));
client.on("message", msg => require("./events/message.js")(client, msg));
client.on("guildMemberAdd", member => require("./events/guildMemberAdd.js")(client, member));
client.on("guildCreate", guild => require("./events/guildCreate.js")(client, guild));

// client.mongoose.init();
client.login(process.env.BOT_TOKEN);
// client.on("error", console.error);
// client.on("warn", console.warn);
// client.on("debug", console.log);