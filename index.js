const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '/poweron') {
	message.channel.send('Powering On Pi');
	return poweron
	} else if (message.content === '/poweroff') {
	message.channel.send('Powering Off Pi');
	} 
});

function getPatch() {
	fetch('https://www.reddit.com/r/PhasmophobiaGame.json')
	.then(response => response.json())
	.then(body => {
		for (let index=0; index<body.data.children.length; index) {
			if (body.data.children[index].data.title == 'Patch Notes'){
				let notes = 
				message.channel.send(notes);
			}
		}
	})
}

client.login('Nzk1Njg2MDM0NTc3ODE3NjUw.X_M-XQ.6Jut6LkKaVpAqv_uDJoE8CbAhII');

