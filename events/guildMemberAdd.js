module.exports = (client, member) => {
    member.send("Salut à toi! Tu as rejoins le serveur LeGamerFouDuNet");
    const channel = client.channels.find(r => r.name === "logs");
    channel.send(`${member} a rejoint le serveur !`);
};