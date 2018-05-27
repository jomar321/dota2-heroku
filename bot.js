const Discord = require('Discord.js')
const client = new Discord.Client();

client.on('message', msg => {
    if(msg.content === "@say") {
        // makes the bot say something and delete the message. As an example, it's open to anyone to use.
        const sayMessage = (" ");
        // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
        msg.delete().catch(O_o=>{}); 
        // And we get the bot to say the thing: 
        msg.channel.send(sayMessage);
    }
})

client.login(process.env.BOT_TOKEN);
