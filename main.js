const Discord = require('discord.js');
const hero = new Discord.Client();
hero.login(process.env.token);
hero.on('ready',async () => {
  console.log(`Copyright (c) 2018 Copyright iAmYouseFx All Rights Reserved.`);
  console.log('');
  let spamCounter = 0;
    setInterval(() => {
      spamCounter++;
      for(let x = 0; x < 9; x++) {
        let channel = hero.channels.get("502593328219684917");
        channel.send(`**، Fun ~ \`${spamCounter}\`**`);
      }
    }, 305);
});
