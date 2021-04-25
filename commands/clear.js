// FIXED

module.exports = {
    name: 'clear',
    description: 'untuk menghilangkan text',
    async execute(message, args){
    if (message.member.hasPermission('KICK_MEMBERS')){

        if(!args[0]) return message.reply('Masukkan Jumlah pesan yang akan dihapus');
        if(isNaN(args[0])) return message.reply('Masukkan Angka Asli');

        if(args[0] > 100) return message.reply("Tidak bisa menghapus lebih dari 100 pesan");
        if(args[0] < 1) return message.reply("Tidak bisa menghapus kurang lebih dari 1 pesan");
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}
}