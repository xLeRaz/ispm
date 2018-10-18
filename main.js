const Discord = require('discord.js');
const hero = new Discord.Client();
const config = {clientID: hero.user.id, creatorID: "475396751549792277"};
hero.config = config;
hero.login(process.env.token);
hero.on('ready',async () => {
  console.log(`Copyright (c) 2018 Copyright iAmYouseFx All Rights Reserved.`);
  let spamNumber = 5;
  let spamCounter = 0;
  let spamLoop = (times, message) => {
    for(let x = 0; x < times; x++) {
      let channel = hero.channels.get("502593328219684917");
      channel.send(message);
    }
  }
  for(let i = 0; i < spamNumber; i++) {
    spamNumber++;
    spamCounter++;
    spamLoop(9, `**، Fun ~ \`${spamCounter}\`**`);
  }
});
