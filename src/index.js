require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMembers
  ]
});

client.once('ready', () => {
  console.log(`${client.user.tag} is online!`);
});

client.on('messageCreate', async (message) => {

  if (message.author.bot) return;

  console.log(`${message.author.username}: ${message.content}`);

});

client.login(process.env.TOKEN);
