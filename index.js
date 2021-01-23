const Discord = require('discord.js');


const client = new Discord.Client();
client.once('ready' , () => {
console.log('Ready!');
});
bot.on("ready", async () =>{
bot.user.setStatus("online")
bot.user.setActivity({ name : "!help", type: "PLAYING" })

})
client.login(process.env.TOCKEN);