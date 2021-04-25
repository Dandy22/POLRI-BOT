const { GuildMember } = require("discord.js");
const { execute } = require("./clear");

module.exports = {

    name: 'say',
    Deskription: 'Untuk Komentar Bot',
    execute(message, args){
    if(message.member.hasPermission("BAN_MEMBERS")){
        
        const sayMessage = args.join(' ');
        message.delete().catch(err => console.log(err));
        message.channel.send(sayMessage);
    }
}}