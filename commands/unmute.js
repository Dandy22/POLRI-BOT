module.exports = {
    name: 'unmute',
    deskripsi: "untuk menonaktifkan Muted",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let muteRole = message.guild.roles.cache.find(role => role.name === 'MUTED');

            let memberTarget= message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> Udah di Unmute`);

        }else{
            message.channel.send('Tidak bisa menemukan Member ini!');
        }

    }
}