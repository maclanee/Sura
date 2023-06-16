require('dotenv').config();

const tmi = require('tmi.js');

const client = new tmi.Client({
    connection: {
        reconnect: true
    },
	channels: [ 'steel  ' ],
    identity: {
		username: process.env.TWITCH_BOT_USERNAME,
		password: process.env.TWITCH_OAUTH_TOKEN
	}
});

client.connect();

client.on('message', (channel, userstate, message, self) => {
    if(self) return;
    let messageRepeatCount = message.split(' ')

    if (message.toLowerCase() === '1' && (userstate.username === 'snussedgorode' || userstate.username === '1gamach' || userstate.username === 'icyroddy' )) {
      client.say(channel, `@${userstate.username}.`) 
    }

    if ((message.startsWith('!спам') || message.startsWith('!spam')) && userstate.username === 'snussedgorode' ) {
      for (let i = 0; i < + messageRepeatCount[1]; i++) {
        client.say(channel, `${message.slice(8)}`);
      }
    }
    // тг
    if (message.toLowerCase() === '!tg') {
      client.say(channel, `@${userstate.username} TG - https://t.me/steelstaya 🍌`)
    }
    if ((message.startsWith('!tg') ) && userstate.username === 'steel') { 
      for (let i = 0; i <+ messageRepeatCount[1]; i++) {
        client.say(channel, `TG - https://t.me/steelstaya 🍌`);
      }
    }
    // getx
    if (message.toLowerCase() === '!getx' || message.toLowerCase() === '!гет' ) {
      client.say(channel, `@${userstate.username} 🚀GETX PROMO STEEL - https://t.me/steelstaya/5498 `)
    }
    if ((message.startsWith('!getx') ) && userstate.username === 'steel') { 
      for (let i = 0; i <+ messageRepeatCount[1]; i++) {
        client.say(channel, `🚀GETX PROMO STEEL - https://t.me/steelstaya/5498 `);
      }
    }
    // soldout
    if (message.toLowerCase() === '!soldout' || message.toLowerCase() === '!so' ) {
      client.say(channel, `@${userstate.username}, УСТРОЙ ПОЛНЫЙ SOLDOUT CREAM SODA CLUB https://creamsodaclub.ru`) 
    }
    if (message.startsWith('!so') && userstate.username === 'steel') { 
      for (let i = 0; i <+ messageRepeatCount[1]; i++) {
        client.say(channel, `УСТРОЙ ПОЛНЫЙ SOLDOUT CREAM SODA CLUB https://creamsodaclub.ru`);
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
    if (message.toLowerCase() === '!плейлист' || message.toLowerCase() === '!пл' || message.toLowerCase() === '!playlist') {
      client.say(channel, `@${userstate.username} Плейлист Суры - https://t.me/steelstaya/5036 Dadada`) 
    }
    if ((message.startsWith('!плейлист') || message.startsWith('!пл') || message.startsWith('!playlist')) && userstate.username === 'steel') { 
      for (let i = 0; i <+ messageRepeatCount[1]; i++) {
        client.say(channel, `Плейлист Суры - https://t.me/steelstaya/5036 Dadada`);
      }
    }
    // winline
    if (message.toLowerCase() === '!wl') {
      client.say(channel, `@${userstate.username} WINLINE promo: STEEL - https://winline.tv/438Sism`) 
    }
    if (message.startsWith('!wl') && userstate.username === 'steel') { 
      for (let i = 0; i <+ messageRepeatCount[1]; i++) {
        client.say(channel, `WINLINE promo: STEEL - https://winline.tv/438Sism`);
      }
    }
    // gta
    if (message.startsWith('!промо') && userstate.username === 'snussedgorode') { 
      for (let i = 0; i <+ messageRepeatCount[1]; i++) {
        client.say(channel, `Промокод - steel GlitchCat $$$ + VIP`);
      }
    }
    if (message.startsWith('!prm') && userstate.username === 'snussedgorode' ) {
      client.say(channel, `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢛⡛⠻⡟⢛⡛⠻⣿⠛⣛⠛⢿⡟⢻⣿⡟⠛⣿⠟⣛⠛⢿⣿⣿⣿⣿ ⣿⣿⣿⡇⠘⠛⢀⡇⢘⠛⢠⡇⢸⣿⡇⢸⡇⡆⠻⢡⠀⡇⢸⣿⡇⢸⣿⣿⣿⣿ ⣿⣿⣿⣧⣸⣿⣿⣇⣸⣧⣈⣷⣤⣉⣡⣾⣇⣿⣄⣾⣀⣷⣤⣉⣡⣾⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⠿⠿⠿⢿⠿⠿⠿⡿⠿⠿⢿⠿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⡁⠒⠦⢼⣶⠀⣶⣾⠀⠶⢶⡇⠰⠶⢾⠀⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⡉⠛⠂⣸⣿⠀⣿⣿⠀⠛⠛⡇⠘⠛⢻⠀⠛⠛⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⡿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⠋⠄⣌⣻⠋⠄⣌⣻⡏⠄⣌⣹⣿⣿⣿⢻⣿⣿⣷⠈⣿⠇⣸⠀⣿⠀⣤⠈⣿ ⣿⡓⠆⠄⢹⡓⠆⠄⢹⡓⠆⠄⢹⣿⣯⣥⢨⣭⣿⣿⣇⠘⢠⣿⠀⣿⠀⣥⣴⣿ ⣿⣿⣦⣾⣿⣿⣦⣶⣿⣿⣦⣶⣿⣿⣿⣿⣾⣿⣿⣿⣿⣶⣾⣿⣶⣿⣶⣿⣿⣿`);
      for (let i = 0; i <+ messageRepeatCount[1]; i++) {
        client.say(channel, `Arizona Liberty | Promo: steel Подробнее: https://cutt.ly/c8h5nA1`);
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
    if (message.startsWith('!плейлист') || message.startsWith('!пл') || message.startsWith('!playlist')) { 
      for (let i = 0; i <+ messageRepeatCount[1]; i++) {
        client.say(channel, `Плейлист Суры - https://t.me/steelstaya/5036 Dadada`);
      }
    }
    if (message.startsWith('!wl')) { 
      for (let i = 0; i <+ messageRepeatCount[1]; i++) {
        client.say(channel, `WINLINE promo: STEEL - https://winline.tv/438Sism`);
      }
    }
    if (message.startsWith('!getx') || message.startsWith('!гет')) { 
      for (let i = 0; i <+ messageRepeatCount[1]; i++) {
        client.say(channel, `🚀GETX PROMO STEEL - https://t.me/steelstaya/5498`);
      }
    } 
    if (message.startsWith('!so')) { 
      for (let i = 0; i <+ messageRepeatCount[1]; i++) {
        client.say(channel, `УСТРОЙ ПОЛНЫЙ SOLDOUT CREAM SODA CLUB https://creamsodaclub.ru`);
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