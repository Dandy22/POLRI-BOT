const Discord = require("discord.js");
const client = new Discord.Client()
const fetch = require ("node-fetch");

module.exports = {
    name: 'chatrandom',
    Deskripsi: 'Untuk Berbicara bersama BOT',
    execute(message, args){
    client.on('message', async message => {        
        if (message.channel.id === config.CHANNEL_ID){
        message.channel.startTyping();
        const response = await fetch(`http://chat-random.herokuapp.com/${encodeURIComponent(message.content)}`)
        const json = await response.json();
        message.channel.send(json.response).catch(err => console.log(err));
        return message.channel.stopTyping(true);
        }
        
        }

    )}}