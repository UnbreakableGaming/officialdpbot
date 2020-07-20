const Discord = require("discord.js");

exports.run = (client, message, args) => {
    message.delete()

    let bot = new Discord.RichEmbed()
        .setAuthor("DarkPurple","https://cdn.discordapp.com/attachments/632238663094370366/632916675808854026/profile.png")
        .setTitle("DarkPurple")
        .setThumbnail("https://cdn.discordapp.com/attachments/632238663094370366/632916675808854026/profile.png")
        .setColor(`#FF0062`)
        .setDescription("This server uses DarkPurple, a multipurpose discord bot that is built with lots of features.\n\nCheck out [us on github](https://github.com/CraftyUnbreakable2/DarkPurple) to purchase a copy for yourself.")
        .setFooter(`© DarkPurple | Owned by Unbreakable | Developed by Unbreakable,   & MCThunder\n${client.config.serverName} Utilities ➤ Command ran by ${message.author.username}`,"https://cdn.discordapp.com/attachments/632238663094370366/632916675808854026/profile.png")

    message.channel.send(bot)
}