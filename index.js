const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login('your-token-goes-here');

const Discord = require('discord.js');


const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

// login to Discord with your app's token
client.login('your-token-goes-here');
client.on('message', message => {
    console.log(message.content);
    if (message.content === '!ping') {
       
        message.channel.send('Pong.');
    }
});