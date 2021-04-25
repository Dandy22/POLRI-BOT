// FIXED
const ms = require('ms');
module.exports = {
    name: 'mute',
    deskripsi: "Untuk Mengemute member",
    execute(message, args){
    if (message.member.hasPermission('MUTE_MEMBERS')) {

        let person = message.guild.member(message.mentions.users.first())

        if(!person) return message.reply('Tidak bisa menemukan user itu.');

        let muterole = message.guild.roles.cache.find(role => role.name === 'MUTED');
        let time = args[1];

        if (!time){
            return message.reply('Masukkan Waktu untuk Mengemute ');

        }

        person.roles.add(muterole.id);
        
        message.channel.send(`@${person.user.username} MAMPUS LU GW MUTE, SELAMA ${ms(ms(time))}!`);
        setTimeout(function () {
            person.roles.remove(muterole.id);
            message.channel.send(`@${person.user.username} telah di unmute!.`);
        }, ms(time));

    }
    
}
}