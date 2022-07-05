const { default: Collection } = require('@discordjs/collection');
const Discord = require('discord.js');
const client = new Discord.Client();
const Ping = require('./commands/ping.js');
const Help = require('./commands/ping.js');
const token = require('./config.json')

client.on('ready', function() {
    client.user.setAvatar('./pp.png')
        .then(() => console.log('Avatar set!'))
        .catch(console.error)
    client.user.setActivity('Powershell')
        .then(() => console.log('Activity set!'))
        .catch(console.error)
});

client.on('message', function(message) {
    let commandUsed = Ping.parse(message);
    let commandUsed = Help.parse(message);
});

client.on('guildMemberAdd', function(member) {
    member.createDM().then(function(channel) {
        return channel.send(`Bienvenue, ` + member.displayName)
    }).catch(console.error)
})

client.login(token.token);
