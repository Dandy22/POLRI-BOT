const Discord = require('discord.js')
const bot = new Discord.Client
const token = 'ODM1NzE3NDk2MDgxMjE5NjI0.YITgkQ.6CiApQG79DWZItV2u53k4KmunJg'
const {Client, RichEmbed} = require('discord.js')

const Prefix = 's'
const fs = require('fs')
const { brotliCompress } = require('zlib');
bot.commands = new Discord.Collection();

// Commands File
const commandFiles = fs.readdirSync('./commands//.').filter(file => file.endsWith('js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

// Bot Activity
bot.on('ready', () =>{
    console.log('Saya Siap!');
    bot.user.setActivity('IN | AKADEMI KEPOLISIAN SEMARANG', {type:('PLAYING')})
    .then(presence => console.log(`Activiy set to ${presence.activities[0].name}`))
    .catch(console.error);
})

// Admins Commands
bot.on('message', message =>{
    if(message.content.startsWith(Prefix) || message.author.bot) return;
    const args = message.content.slice(Prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'verify'){
        bot.commands.get('verify').execute(message, args);
    }
    else if (command === 'group'){
        bot.commands.get('group').execute(message, args);
    }
    else if (command === 'clear'){
        bot.commands.get('clear').execute(message, args);
    }
    else if (command === 'kick'){ 
        bot.commands.get('kick').execute(message, args);
    }
    else if (command === 'ban'){
        bot.commands.get('ban').execute(message, args);
    }
    else if (command === 'mute'){
        bot.commands.get('mute').execute(message, args);
    }
    else if (command === 'unmute'){
        bot.commands.get('unmute').execute(message, args);
    }
    else if (command === 'say'){
        bot.commands.get('say').execute(message, args);
    }
    else if (command === 'meme'){
        bot.commands.get('meme').execute(message, args);
    }
    else if (command === 'poll'){
        bot.commands.get('poll').execute(message, args);
    }
    else if (command === 'update'){
        bot.commands.get('update').execute(message, args);
    }
    else if (command === 'rules'){
        bot.commands.get('rules').execute(message, args);
    
    }
    else if (command === 'farhan'){
        bot.commands.get('farhan').execute(message, args);
    }
    
    else if (command === 'cr'){
        bot.commands.get('chatrandom').execute(message, args);
    }

}); 


bot.login(token);