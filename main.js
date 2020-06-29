const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.once('ready', () => {
	console.log('Ready!');
});

const { prefix } = config;

client.on('message', message => {
	if (message.content === prefix + 'ping') {
		message.channel.send('Pong.');
	} else if (message.content === prefix + 'beep') {
		message.channel.send('Boop.');
	} else if (message.content === prefix + 'server') {
		message.channel.send('Server name: ' + message.guild.name + '\nTotal members: ' + message.guild.memberCount);
	} else if (message.content === prefix + 'user-info') {
		message.channel.send('Your username: ' + message.author.username + '\nYour ID: ' + message.author.id);
	} else if (message.content === prefix + 'help') {
		message.channel.send('Commands:\n /help\n /devs\n /work\n /ping\n /beep\n /server\n /user-info\n /progress training\n /progress main');
	} else if (message.content === prefix + 'work') {
		message.channel.send('Special thanks to the developers for making our maps!');
	} else if (message.content === prefix + 'devs') {
		message.channel.send('List of developers and helpers:\n Head of Development: Lloydgarm1/Jack061231\n Lead Developer: Shyre1695\n Helper/Owner: Theminecraftdemo!');
	} else if (message.content === prefix + 'progress training') {
		message.channel.send('Training centre is 90% completed with more updates to come!');
	} else if (message.content === prefix + 'progress main') {
		message.channel.send('Main map is 5% completed with more updates to come!');
	}
});

client.login(config.token);