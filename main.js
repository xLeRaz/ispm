const Discord = require('discord.js');
const hero = new Discord.Client();
hero.login(process.env.token);
hero.on('ready',async () => {
  console.log(`Copyright (c) 2018 Copyright iAmYouseFx All Rights Reserved.`);
  let spamCounter = 0;
  let spamLoop = (times, message) => {
    for(let x = 0; x < times; x++) {
      let channel = hero.channels.get("502593328219684917");
      channel.send(message);
    }
  }
    setInterval(() => {
      spamCounter++;
      spamLoop(9, `**، Fun ~ \`${spamCounter}\`**`);
    }, 305);
});
