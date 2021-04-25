// FIXED
module.exports = {
    name: 'kick',
    deskripsi: "Untuk Menendang member",
    execute(message, args){
    if (message.member.hasPermission('KICK_MEMBERS')){
        const userKick = message.mentions.users.first();
    
        if(userKick) {
            var member = message.guild.member(userKick);
    
            if (member){
                member.kick({
                    reason: 'Noob'
            }).then(() => {
                   message.reply(`${userKick.tag} Mampus Kau Bangs*t`)
            })
        } else {
            message.channel.send('Orangnya ga ada, tulis Commandsnya yang bener dong tol*l')
        }
          
    }
    else{
        message.channel.send('mau kick siapa?')
    }
}}
    
}