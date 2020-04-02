module.exports = (client, message, args) => {
    message.channel.send(args.join(" "));
    message.delete().then(msg => console.log(`Message supprimé: ${msg.content}`));  
}