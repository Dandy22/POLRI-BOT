// FIXED

module.exports = {
    name: 'ban',
    deskripsi: "Untuk Menendang member",
    execute(message, args){
    if (message.member.hasPermission('BAN_MEMBERS')){
        const userBan = message.mentions.users.first();

        if(userBan) {
            var member = message.guild.member(userBan);

            if (member){
                member.ban({
                    reason: 'Noob'
            }).then(() => {
                message.reply(`${userBan.tag} MAMPUS KAU BANGS*T GW BAN`)
            })
        } else {
            message.reply('ORANGNYA GA ADA, TULIS COMMANDSNYA YANG BENER DONG BANGS*T')
        }
      
    }
    else{
        message.reply('Jangan Asal Ngeban orang dong GOBL*K')
    }
}}

}