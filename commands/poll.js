const { messageReaction, MessageEmbed, DiscordAPIError } = require("discord.js");

module.exports = {
    name: 'poll',
    description: 'Untuk mengadakan sistem vote',
    execute(message,args){
    if (message.member.hasPermission('MUTE_MEMBERS')) {
        const Embed = new MessageEmbed()
            .setColor('0xFFC300')
            .setTitle('Polling Sistem POLRIBOT')
            .setDescription('!poll (Argumen + Argumen)')
    if(!args[1]){
        message.channel.send(Embed);
        return;
    }
    let msgArgs = args.slice(0).join(" ");
    message.channel.send('**' + msgArgs + '**').then(messageReaction => {
        messageReaction.react('👍');
        messageReaction.react('👎');
        message.delete().catch(err => console.log(err));
    })}
}
}