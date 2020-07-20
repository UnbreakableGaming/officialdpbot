const Discord = require("discord.js");

exports.run = (client, message, args) => {
    message.delete()

    let bot = new Discord.RichEmbed()
        .setAuthor("DarkPurple","https://cdn.discordapp.com/attachments/632238663094370366/632916675808854026/profile.png")
        .setTitle("DarkPurple - Quick Links")
        .setColor(`#FF0062`)
        .addField(`Website`,`[Website](https://DarkPurple.net)`, true)
        .addField(`GitHub`,`[Github](https://github.com/CraftyUnbreakable2/DarkPurple)`, true)
        .addField(`Wiki`,`[Wiki](https://github.com/CraftyUnbreakable2/DarkPurple/wiki)`, true)
        .addField(`MC Market`,`[MC Market](https://www.mc-market.org/resources/12800/)`, true)
        .addField(`Marketplace`,`[Marketplace](https://www.DarkPurple.net/marketplace/resources/)`, true)
        .addField(`Discord`,`[Discord](https://discord.gg/hXKuUYM)`, true)
        .setFooter(`© DarkPurple | Owned by Unbreakable | Developed by Unbreakable\n${client.config.serverName} Utilities ➤ Command ran by ${message.author.username}`,"https://cdn.discordapp.com/attachments/632238663094370366/632916675808854026/profile.png")

    message.channel.send(bot)
}