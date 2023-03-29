require('dotenv').config();

const tmi = require('tmi.js');

const client = new tmi.Client({
    connection: {
        reconnect: true
    },
	channels: [ 'steel' ],
    identity: {
		username: process.env.TWITCH_BOT_USERNAME,
		password: process.env.TWITCH_OAUTH_TOKEN
	}
});

client.connect();

client.on('message', (channel, userstate, message, self) => {
    if(self) return;
    let messageRepeatCount = message.split(' ')

    if (message.toLowerCase() === '1' && (userstate.username === 'snussed' || userstate.username === 'steel' || userstate.username === 'icyroddy' )) {
      client.say(channel, `@${userstate.username} Works.`) 
    }

    if ((message.startsWith('!спам') || message.startsWith('!spam')) && userstate.username === 'snussed') {
      for (let i = 0; i < + messageRepeatCount[1]; i++) {
        client.say(channel, `${message.slice(8)}`);
      }
    }
    // тг
    if (message.toLowerCase() === '!tg') {
      client.say(channel, `@${userstate.username} TG - https://t.me/steelstaya 🦜`)
    }
    if ((message.startsWith('!tg') ) && userstate.username === 'steel') { 
      for (let i = 0; i <+ messageRepeatCount[1]; i++) {
        client.say(channel, `TG - https://t.me/steelstaya 🦜`);
      }
    }
    // kick
    if (message.toLowerCase() === '!kick') {
      client.say(channel, `@${userstate.username} 🟩KICK - https://kick.com/steelv`) 
    }
    if (message.startsWith('!kick') && userstate.username === 'steel') { 
      for (let i = 0; i <+ messageRepeatCount[1]; i++) {
        client.say(channel, `🟩KICK - https://kick.com/steelv`);
      }
    }
    // inst
    if (message.toLowerCase() === '!inst' || message.toLowerCase() === '!инст' ) {
      client.say(channel, `@${userstate.username} inst -  https://www.instagram.com/topsem/ MorphinTime`) 
    }
    if ((message.startsWith('!inst') || message.startsWith('!инст')) && userstate.username === 'steel') { 
      for (let i = 0; i <+ messageRepeatCount[1]; i++) {
        client.say(channel, `inst -  https://www.instagram.com/topsem/ MorphinTime`);
      }
    }
    // плейлист
    if (message.toLowerCase() === '!плейлист' || message.toLowerCase() === '!пл' ) {
      client.say(channel, `@${userstate.username} Плейлист Суры - https://t.me/steelstaya/5036 WW`) 
    }
    if ((message.startsWith('!плейлист') || message.startsWith('!пл') || message.startsWith('!ПЛ')) && userstate.username === 'steel') { 
      for (let i = 0; i <+ messageRepeatCount[1]; i++) {
        client.say(channel, `Плейлист Суры - https://t.me/steelstaya/5036 WW`);
      }
    }
    // winline
    if (message.toLowerCase() === '!wl') {
      client.say(channel, `@${userstate.username} WINLINE promo: STEEL - https://t.me/steelstaya/4215`) 
    }
    if (message.startsWith('!wl') && userstate.username === 'steel') { 
      for (let i = 0; i <+ messageRepeatCount[1]; i++) {
        client.say(channel, `WINLINE promo: STEEL - https://t.me/steelstaya/4215`);
      }
    }

  // onMessageHandler (channel, userstate, message)
  // onMessageHandler2 (channel, userstate, message)
});

// SPAM MODERATORS

client.on('chat', (channel, user, message, userstate) => {
  if (user.mod) {
    let messageRepeatCount = message.split(' ')

    if (message.startsWith('!tg')) { 
      for (let i = 0; i <+ messageRepeatCount[1]; i++) {
        client.say(channel, `TG - https://t.me/steelstaya`);
      }
    }
    if (message.startsWith('!inst') || message.startsWith('!инст')) { 
      for (let i = 0; i <+ messageRepeatCount[1]; i++) {
        client.say(channel, `inst -  https://www.instagram.com/topsem/ MorphinTime`);
      }
    }
    if (message.startsWith('!плейлист') || message.startsWith('!пл') || message.startsWith('!ПЛ')) { 
      for (let i = 0; i <+ messageRepeatCount[1]; i++) {
        client.say(channel, `Плейлист Суры - https://t.me/steelstaya/5036 WW`);
      }
    }
    if (message.startsWith('!wl')) { 
      for (let i = 0; i <+ messageRepeatCount[1]; i++) {
        client.say(channel, `WINLINE promo: STEEL - https://t.me/steelstaya/4215`);
      }
    }
    if (message.startsWith('!kick')) { 
      for (let i = 0; i <+ messageRepeatCount[1]; i++) {
        client.say(channel, `🟩KICK - https://kick.com/steelv`);
      }
    }
  }
})

// EMOTEONLY on/off

// client.on('message', (channel, userstate, message, self) => {
//   if (message.toLowerCase() === '!on' && userstate.username === 'snussed') {
//     client.emoteonly(channel)
//   }
//   if (message.toLowerCase() === '!off' && userstate.username === 'snussed') {
//     client.emoteonlyoff(channel)
//   }
// })