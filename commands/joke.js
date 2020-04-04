exports.run = (client, message) => {
    my_message = message.content.replace("!quiest", "");
    message.delete();
    message.channel.send(my_message + " est un rigolo");
}
exports.help = {
    name: "joke"
}